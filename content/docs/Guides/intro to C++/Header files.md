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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KHUCILP%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T004340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQDGB7%2BPPSxADL%2F7dhm33iHo2gHmcuVtel%2Ffv4sp3mrzoQIhAMbM0pVVmBEr22OrjfXNrtizsgJ8IKQXLM%2FgveOXkz53KogECMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdigATwlnGS134zakq3APKDq62OYqW6VtB6su9yMfXQ1fsOnJNVLjgBGoymScZ8ntptBztT5QKnnIckbjB4DZommCBi2jtKTGWiePP0ZtcQJwLdg0SH%2B5twzyo1xW3LCaFwKIumS6789S%2FAp3myfGQ9DJOGP181iPUJ%2FmTv5dd1AeF0k%2BTBilyV1p47HGkn8WPMPBgVgqpmYRaTNIXGhB%2BRq8lma8pt08IEBUHaxJ%2Bnl%2FfBnAHHFHbN1llFrWkBTZT2ASqeM65ymAAPcI7xVARZQ30eXkKZ%2FvmPy0vGyHZ4DtnZn3Cwf6aAMDvoPvk6ZSzpE7v0OebF58lpQZHa6pDGLGo5T19GpQt8gdm5didTgzJN%2BfR63VfvFO5PZqoxVT7q5h99%2FZ6p795AGKX9OS07%2FJU178nn%2FgMrtWkJWcDs2E5SBn2Thdpdg5Fwr%2BDPEX2zGAxLEV5vsUvttjVzUfzrAMkwJtiFiVRgUwkNoSjuBMUfdcfpwOvr6slYgL%2F8fDWPvuqNN0MD9SOuiVoFGTbWeDaM5UVaOSC6vH3moIGYGCXvYOd%2BJZfdeGATx%2B7lABNQI8LtSTyZwhzXGMaLlgRA9oUW55q0paclLWWGwrt2jL9vurnEA67VRcf1Z59etknaMDp%2F6uriUmtqDC4hYXBBjqkAUu6%2BUdSKA7WM2IN03NLWZcc0mBkQ1xbSrv5%2Ff67CYKZ3nZ5CXaFHcBd6dlapyxwyRj1yi2Y7vHaOlXsfewWYoLvTaTSpOMBVQuLOFj9CnS5KQNygOYiGoYlFQAWXvpEWsufZDgKqnaHZFKnXhb8PLMeh2FmDbDFRK7uccPx%2Fh3qFvt8poun6M3pYyxifV1pO7ELGVu1LYrXf0q6D2RqfGkVXmlk&X-Amz-Signature=18b0e13d4a1f17099ae128fd55598d1889b79ae62e452b97ec49d297b8cf9d74&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
