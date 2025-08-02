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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674V2GPHT%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T210756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGAEbbgH3XkK3XMwknVPGmjEEbRNZn0qOcbXKucs1mL0AiEA94QTxnA43uhVTup1Ep8n%2FODmZqx43ZW2HDHPX4xWp80q%2FwMIHBAAGgw2Mzc0MjMxODM4MDUiDCVcp6YvyRIeYilJbircAxmP%2BR8quV8broxKUOK84YIegFKxQYvfdXaHBu3Lpi3oGaMx15gx59L7FFvArovMG1VyWq0W%2FgO8CEudHhQLxYy8XMvGLIpF8pP79MZqQYwTarwUxwVZ1bYXmHlz9X7d4cLUxtC8fWKEqUrN6sewq4J6BNvEYL8L3LBN6LFCwFBN%2BjwfUw2N09R4QbM%2FqyBEWQWjqY%2B5V3g6quZoSVCBTJN4qNW%2BTLQ8Tad3wTn4bepX%2BO1VeRlYcXBoAmY0yDmYiKPoZ0tewg3EbpvGqQdNdvJPTJJdxbBgSX4i%2F3FwRLVLJPisht31ZhfhsXTpzyCYFioiYkPqoj7q%2BUB9jmt62LC7bIEdU%2F2NYTbyCix%2BP8T0AgHuyb1lcqwexGeJKHd13VIuFgnyYooAscnb21CapjjpuxMGpa5FAuyJa1aSMZF6jkCbNGSWpF4krdR7%2FlaszI28sHqqVFdCJGJxKNJLgW%2FFdTVSnE9SMmP5eLhuqEadUWvV0FkSj5Fnsh9D0DOn0PZEMRxvuE7MSy6l18LCNRnCqKVa%2BuSP3zN43Oehl0OHKcnRE8%2FQ1ytwItu4rz7iqxBBTk4qQpzxt%2BNO%2BgbZZ%2B3XAq6cqAcvg5V9jRUvE5uyfS1HIt9t1rTwvc%2BmMLXEucQGOqUBZb1lK0sBehNN%2Bkv9qVjJrJTYx3nlrlwP5JlE7Y5FguoVrmKnpSHkERX1jZmRopcSZr6kj9U5hupqL80PJgB7Bu8E5u4GFBURWay3sqsJeeADaccgKwbuMs484PLxpUYhzRQmPpIE32EmuNGzSqN9zi81Qi0TwjR4kO4RsqaGkC%2BNhZtL5ilhi3mNqUEB00B6HxSzq4MH5JvdM6AFt3Jn%2Bc8rz2Zy&X-Amz-Signature=3dee0c12ab2f72625141dd394f9b56d2ba25c49023adc06c69b629ae2f9f71e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
