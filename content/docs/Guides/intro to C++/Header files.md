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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TW5ZQBYM%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCICLyus1kcoq4tuf4PvrS1Dl8LTQdNU%2BBIhJi%2FRjtQi1DAiEAnMQFR29UZ4t8W0qxK6bl%2BnQe6EN5WrNrI2UJA9Si4Zsq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDIxMR%2Bey4Bvcp5QMjSrcAzKw9GIYgA%2BYZdPyJ9IITOwmLcHvKkHe7Nl41kJw8aPY%2FbuVTYFsTuHn5oKNqOK0wLNmGqcWqncrDfdvtnye9BdMXLmhKfSELJCmx28nbg22u5RIR7ma1iLfzXkD6myvOCpab3XSgutB2OgMEkL3VkuL1F%2BduDHNXfC8oo9xkeFRVLxYIbjSZoHatrg13qIPTVslK%2Brl3V0DQRiPPDtU0dRzgPkmk88pLZVWjc9b482OpkQCMW2QuPSXtdB6wmyeZdJgXyIY5lPApUmPnajc2eWQ0H6WEmAIzJRVuAsB%2FQCSAl5Zl8YstGzyBNOmUoBz6B3dT%2Fpwex03jZjleFvYsx4V59wCaA087OZEOol5dmqwg7D8kA2eB4FY%2B4uWcOzc0CBMwvvMtjid1%2FNH5wsSQwEIOllUF6D5cpnr3W2IwxS5cMGbYA7P52TKrf6Kz6lZEh4%2BwttLsjW%2B%2FeAHJsXxvYcV5r4BHjPZF4EIJxj5xp2WYzcf4lpMJgl%2F16vM%2FiK28rTO0bi1xPlydZdz1%2BNV4q%2BJCVSp3yrnwdOUL9FLFQ6FawiluXpRL5vsonusGjQ0VindE0kT9LW%2BJEQ%2FvHPoY%2Bem8yn3KIu6J9hNr1EcuO%2FWCSi5FxA0yuW7qbAvMKa%2Bib0GOqUBUhYCJgPxfHcTZ3QyL9yeP0LE27zmwjJ%2FXNOJPQkhsJ4WN7WAW3rkUlgEm6iiq08b8HfCR3gn8qGacYcB%2FRGbdgZ0KhX2CgcfGi6YutLR1L56NPrB1wj7E0YscQxNZWPlD0sNTHY%2BVyez2DBmLKYztP1V%2BerIEt2sI9LxSbnkHOcVn%2BrPjIoL0H%2BV0pZzJ6%2Belv6DVVprjusFdzOAt29Zud%2FJZi6B&X-Amz-Signature=def4f471278cd3cc5b122319708970d91787f79731382186601095c60f6123ac&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
