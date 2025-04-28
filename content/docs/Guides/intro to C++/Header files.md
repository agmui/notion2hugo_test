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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5NVH575%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T073424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaLwReLhETCmhHjdegSrYagLInPy0kNEAdNDy5M2eWdwIgKodr63jLYh1EwLY2tkxDJbWcDD6L4kLDAGtfsyjrnrMq%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDFx%2F%2B851y%2F727JEZAyrcA4QIZ%2FpxhOUK%2BJdJRcy1jmf3O8G6afFjNOaFJFsTWIYkXkg31eiC3oE4ydPApKJNaVw%2Bi9cwLAbCpcqW4IDwDO3nQ%2Fq%2FQqdO%2Ft57l0RdE1IG66nF0HVNGh7c8Zicos4ZbaGz2JlPWIwV9mEB9fWrQrPPrCBvpyx5DjT3JdMaiWpVYukUfWiU2BqWihKHfHLFpO15EUslN4Yg6ee%2Bzmg3NTJUuusSZiNexGTagkvg%2BTigVO4KQkN9TjuKtq6kyqWr%2BoxzkpCjl8ogaOTq0LHyOHdRZc3pRGEmhB8pZuwOar6QZfxNUv7N1n6YCNk%2F4pI43AyYm7brkHLzAnPkhNWhpOrX%2BDu7Y8er6n5OiNxsu6JvrGHk8Pw4TO8oUk%2FacYTW0rsCO2ufE0pMFYLmt2%2FLEPHiRYqy%2BiWh911s1cak0zT%2BS0YcojPtNf3EC5B396CIMuc0SSEqRU4duxU%2FZ0r8V%2Fm3yNQEYx%2BEH7JlGXeUTDTtL89rJ9EccFZ%2FzMD0vILLG%2FT2P2erEXl0mcD7qfLwFyH3w6emFRJqQtboOlsuQf9fXp08Dz4abMZ5Aj%2B7y%2BNpU7JbHXjc8oQXsejE%2Fb7C7wzkXgW0bB6mIt%2Bgy3I2t884dX30hbg%2FpXE2IVyNMP28vMAGOqUBapLouKLyu302BVLQqNgFdwOoGFihxtZA0BntbYAqLUB%2BB9K71x%2FGYCGHxCD79iMSVhco%2FDfWH7%2BZX1xLaDcbZ6%2BXG4wxLDCTLS9w7P2dpidRC62VeQJAyJ%2BJFAhdW2KPWjw2i9jWaWdBYmU%2BcaDhlYE6rAy6lffXkiSRdixAQbfszkKaftng38JfSF6hHO3lLZHmjwJuVpSrSmvNodqmmhO1bgMD&X-Amz-Signature=5e31b56f050c14802812721dd6a3bc52b1adaf28e7d3510b021b72f7e8f212b5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
