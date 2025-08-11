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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRRMB5SY%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T101038Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCRCPtkaXaos5H8OWKIuRVPHxwBsyPIPE%2FUPDTqpu0a1AIgOUUDp5G9vARCOAeNtTj1ipXYRWoMdjxDiwo3ASVBFs0qiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL37vPv8LAboksxY8CrcAy0v6voKsYh7P2uVsTx794BkoTBAVC2Nk0mHZM4zDbn0YEcC8Nizva0DjHONwB6RAzny%2BXitHCfBgf4GqHo0Jiolp9pyKK6wjiADLBNpJuCdvvizMYrWN%2FrRIHhVF9ymnGJq9cJBiwDnTNONOIjoZ9Efr%2F3VwSorYknusnEOGsmH%2Fx4RQnxqEcVBc%2B2oIOO9uIq0iQHdFkoUiH7iPC4GY6xadqQose%2B%2BT70mSdKb8KhFroY%2BKomUzt9HPC0onApW1s6RJtwkdZ7PBuS1%2F4JiY9so4Y1ASIm95SJUs0U7LIJLhlHQz9pwKOloIhhdARumPtY5WBddH3vgOIxhBjAGYfcViW4p5ditZq5ew4P7r7W2vp8VEepgoycA8ubdkUddtq4VasqkyqQFydwy0BADR08rcZ1dS9BKikmEfBzQW7BmsN8OeIb9lKVeu3ivDCCJPbbfcLuM50HDjz%2Bf3kC4DcNSjUY0j0%2BE1bNWP7VuKn08HencKW0S0W1Le7xJbzOIfA4uq5VbT%2FZg%2BY0hMSlQN4kDoigqnLw8uNqb%2FAv340n6%2FqDkFWUWeU%2FKv%2BJWoClBaW6K0qwy1jbyvhgOE5XtspeWArbFbp%2BmUb1wmG9fAyXrZXIpRJ8J18MpWWquMMz45sQGOqUBp4T4zzJRhREPR5WyX5jl41fvQO19S8n3%2BrBit%2FTbwxWxsFKw%2BVdKvi0T3qnq4fnnIDnH14EYY5j03R9H4dO%2FgJBuATV1kdCjBfX7oNhVzB6qipUoMFYimj6laofAujfanTGceYKyKnB1PCH9xvpWws3KWz%2B47RF4H0c90zl%2Fb19vfm6tDV8raYA6qE8jt%2BowdnjEQg0L58%2FOTGPVfbq%2BqVaAeGHk&X-Amz-Signature=853bb8ae1e9137ffd642c912d1772a62351abc148f5f5fce3bc959e9135aa0b0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
