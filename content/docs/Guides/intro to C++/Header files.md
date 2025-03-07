---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627DYVHBY%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T200839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQDmZIfocJAe%2FoRW0QD0nTgmfHD2jLkwq%2BSwwUiDnHnR5AIhAL9CD2t1ZDeEUXqdmtZVkjdKP30lGCRUn4WzvzGSRKJAKv8DCE0QABoMNjM3NDIzMTgzODA1IgymYOulTb%2BWqww%2B2e4q3AP0EnAY3wzI35cWohqcskPnih8Id%2B%2B%2BkZankeGoz4Tyl3hbR1YrI%2F8Ixwi3l7bqOCI3K2lplUFnj%2BfD8L9mmrwTOxoje2RxOPLFl8ajcUUCt%2BHvQpcvxV3yVApMCIlabbXDj7iveG5u%2Bd61hJeGK7Z8WvdvfVscEJ6alwA1%2B%2BhCryAJwCg2hPfAHirc9jGqfV0Q9JwDzJDV9ffdbpatye%2Fh3ncbcz7ioi0RRfdbn55%2FgpC%2FwsUz07UoJucnbXFdYriBbbrSrrmY%2FpHKHzN%2BjQTbLCHo%2F4nE7WIqiRAWjQn%2F6XxIPUxMRLG4X8q7koIu%2FayUxg%2BLh37q0drpUUOixIa%2FHHQThsxHJpOGY264MzBHiq1nO7rGiU6UETwwrkNQYlQutQqfgnaf62cvrD0HVEKVIGnvS%2FuBc4U1p%2BLDZW%2FeN7XPkIkrlYBD8tIZ5Ijl%2F2%2B1ebVu6jLOa4k3DgXAt4g37o7ewtCV7UV7xQe%2FoI9J4am8pdK5k8%2BDdxBUD6UZ2DrV8ntLirLarP8yN0avdEBTMG02E%2FXtUrFjFPhtR7AhSGQvqNkzkwPZtOehzD1sbv%2BptBuWbavwReHVGS0bwd0bfuXnI1MjNJxzC8%2FGBuU80yr1o9CewPpJUllSdTCYoK2%2BBjqkAbnD9JhIHlEKkvF8o3HmXbMC2J3rxudjSytIF0ZeOtMI111cifzk0odHc7WxGaPVNRWw6Ls6mZse1U0z0zm%2BC7Q%2B9dWOk%2B%2BmQ4%2B56uD%2F%2FajdoH4hWvojFvhsRa10N6qqu84bbUCFVfYjuUinIWt7MILq40w4BwGu1jL0LxT18iE5ZyXBIFlbrtc5FwBqeeGLadKqqzWHE%2FZ4XQcYOs7xF6WkWp0u&X-Amz-Signature=de0752aa7602541941462cd8f15eaeb5fd1895efec28ecd74874a6efbf667b67&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
