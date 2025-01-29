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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKTJEJW6%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T220639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHVB3sGTHm%2BL8Ucxelmxyutq%2FxAZnVlGHYDQ09IhnDwvAiBcTkNxKb00hn28m4%2F%2F2h%2B%2BPNuXKOmdQNak2074GC61miqIBAiX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6dLA500HTbEwOwZhKtwDQTrcoPy2Jca8bcFxjRr9jfjTbSfm9af2m3jMRmuBwip6bF8waMBRJXGeQbspzRMqvMU6HBSgqp012hesQ8X%2Fp6DPSGDAzpVhb8dZpSBa4%2FriNgkIuajAL24z8%2FsfedxuF5FIJ%2BmyIfa216hPkohQC9XbKVHKOuXjhNumCMgE7oiyUx7yHwPWM95hisCVbcsatXcP8lnMkiXetCw4HrbWN8sOnbnB3ppK6OO0eHoQgdBr12HJ6a9ZYOznen440W2mbsXSt0jvfjYtAQWD0RrjXf72vS%2BklCf1nGKyWZHxlYfXDt5Lavtd%2B28ejFgN1GMvwN8rTVx5gfV7h9HO7eVcJ2tW%2BuK9j%2BD43qinkGL2ynC7IV1ZL1zO%2BH%2FWSYXkXRNXhqRj1SJOL5kC5zHbsC7BuFlCp8pKEgt3q4HqNymiva8glD7M9V%2BTF3PRsRRwwcfuJU8KjDjw1diLymDZPbCvCPWmjwM0egx0WGXocKz2RCph4Rtl4goAAb3v7t5IBMbIRdBaRgC05n6IxISDXT3fiedjSQ8csd7gOPTfjaN8UOoIn8RO4qRM7LFbli1XHmV%2BMNN2tvEQctje08CeLARtX%2FWScXdjR8Zph3WpHAsIds7Txy7o43rAy4IXK3Qws8bqvAY6pgEmh2ylUeEogz0BOPhgkQlAo7qTt12CGOoewVR%2FivoyBp6Bwe%2BGlHv09dkSVyJ9TQnHCXwG2Smji9DIa9%2F97ZFdS5C5ZY%2B1hHs7pVMwtTFPDFfYs2oyahlTVdYyMhUJp7Ze%2FYeXYsxBPRXz8CnwQFUD7gHbr5nqHKwOlnolxuligOFs7R0dKCQ4FJ7l8dKhAtuvwFMaCBnBcpWWwRMbKFfIEHq0uYqo&X-Amz-Signature=e521f6f6ee61ddc90083103b0112991e922642db0a85e9dac33ce2097d58b19b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
