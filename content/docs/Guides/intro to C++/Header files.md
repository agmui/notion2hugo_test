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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KM6MCX5%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDC0EjqNeHh2VRg%2Fcf2FtVThYcC3p1UE91Ye3%2B3nuKw%2FAiEAoX7SdWdb40FtW3KRvO5ktExYcD9MPkFYjSgZO1SIlZkqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJgLfX2ee4xyy2ia3yrcA49pscGxQBEeyVEYx6WMnYm%2FwK%2FaF0iaA2zLM4E63CyEmJBLDYVxp3DIic4WSoD99qaxqA0px51UAX0b%2BeoTYSBlJwNQzF%2FsOPvxpfnMzuCWc6%2BahDT30MAN7Righ%2BZU%2FJm3RrchLShu75E7hr6VPfHZZ4YrumuR5y047qpRPmy0sQLufBYAT1RLh1mK1gEu0jM%2B3Dg9ciRpZ6SLcGbx8hGiCBdfyW2T86uaa5crY1nJNaLaWW7rFMoqwpXBEZOvDBEq0MbvsFgWhW1vkeDq368HsTG92A6RL3D1JpFuDCaiAFJdG01RxkfSQfipK3zHhNLz3njinZSoHefMzihlcW2uVt06BKAIk%2BPAnIF4FPNdD5Z80DpOjGrpUpNrSPqwu7y47dh3PBDCal6o9%2BMPBQuQ0OK9W4G3raFBRp4riW5UB2M01p1Kou%2BXK1TRa2FJlGEme5GuQIq8PATjG9KWfxi9%2FaP1fkv1LLLsonqSCZ7I0e%2Fa8MwSXVTU%2B%2Fdi%2F%2BUs7teiDFnxHw5UcYUUz8IWxi1%2Fc89gJBWe7rKXvRHKZoD4ZJKUX5k5hr%2Futg9mw7VXtwPefiz5SrhvkvVCvwHQsD0rKLYexmMvGwTdwbCyKphk43wol0TmCGCPvccFMIuB3sQGOqUBnqbgD7OfarBJ%2B9ZO5oOt%2BoE7iqToL91aOoW4oClk%2BzLuj8JM%2FIRsy%2BHjNe1h9aQraGXwgiZcewabzzHb52A9ADjMRxsu5xqpqdihXjZ%2Ffl3BH913JSxFZ153%2FfaAG86EoXAfwDc%2FEmnvFHzYycGc6KQMRc4yWnffeGA%2FvQ1ZNC32qjs1%2FEOjIhyyX22jg1joZm2KblCCgmUYePPHQw2ZgUryhsFV&X-Amz-Signature=78a57ce7e53f8051e973e245ed49363288798c27f22428cef0c9d229d13f89d2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
