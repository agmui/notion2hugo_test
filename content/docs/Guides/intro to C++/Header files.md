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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZNUY66U%2F20250304%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250304T161106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEhGslFMOaV%2B6RdbDqNXsYVVNJkRR8FjIMZAM%2FJ98UINAiBkiTuddcErbqDZjW%2Ffgc3TQwkzKZM%2FodCzkG4K1DRN5CqIBAjw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMes3NJnyu%2BtepjQ3HKtwDSy8CvOqrFCm1FEKS%2FzT5sZu5LmLH4grTRWPjlVE%2FlnX1Njmgd1tSjVuWUy8WZFHadDM5eWwoF6LTd5JOYK9LEc8mIHTNG6uJ9KzycdzQwd%2B4vjw7r1VoulxpGiqls3%2BCZjTRZ0Rujh9NCRQCPbbA7qeZZ5mVZpE%2Bkt7HDxjUCPGm2IgOC39YYBRpzfl%2BYpnQLLGkXDWUYIKCs52Pb919mHqCP%2BQ3Ds7ijTYcs9ODNxutvyndlkyCQejiYIcORlgBXv81QxOdgzOAvP0eCxcZ2F7yEdZ%2FGsdN06PsbbRzEtIsjyHlY4626%2BMLaIucLetHJbymh4AOb3nMUyWYAt1KeXQQE0ulaViQZMBzloQiku%2FTcvqQjsu2YF%2B6OFUQhbc7JGTqPJDvdH4IfoN0BiiiH6TdM%2FsyqvgrSYuSbvIn8wqpYFUELaTeymyAg6QwETRqREFa5cwger%2F65G25XWAwMlEqq2%2BzW7r%2B44BB1vu90zePFDVuDFAqmnFHgOoQVI8XNCD3yqvpXB6zLugLoC9%2Bfwv8MGV2PdhbRhEMSwC9AfLEaRgvdOIvfLgK%2Bipia492EchIhNF4TQtrQiYV7bIwctxhgFzlYq9E3u58dHnxkseJH%2BXtKUmOJy5UY2gw466cvgY6pgGqetr1Ut4jku7iNUsDXzfO2wBEXGR8OySkOrgA1h%2BXSnYNPjyEiwWiXH5rHdPpKewZEP4tDqf8qcYHVt%2F6X14Thgo30%2FER4H%2F%2BYXSJ5Hp6OGjCTahi5B8Gz5g%2FK2C1B8fy2b3%2BeGXeg5KjDiyVRjo%2FVBOxr0YTRn9eRfxyaiwan7VB40xmOwLTYsoSd3AMB3q%2F7QEM%2FDWLPpYf58IM9Nj0iSezQTML&X-Amz-Signature=4bbcdb5459910fa6a2644b25797d7290d4064a61a24e57fdd7e1a7a716b24874&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
