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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRVG66RU%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBUADBOSO33BMq3ih5cp7hhwOCaaNISIIP55XEItuly7AiEA7VCZ%2Bf7YZh69tf3DX1C6pIqsznM3JFl7rDMToCqKRZ4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB3THvxP8WVSfty1%2FSrcA7qnARhqUylDzz8wTFGt9yEWMxppWZqVt3T5Kc94fWALP6KHMjPq2pcxw4%2B3Mv%2BCbHz0hjRixHzgV6p7st6vTS4sSd9xxbE0ARNxaVrNRE8rNEU4R1qwXV9tByylDT1Pxk%2FiY2eKrj%2Fby7qj6SwraBqBYvq0EtWR3vn9fn0iJSbRdVDPJgiIBghqZwahJx0UxxACet%2BB%2B6u7WY1%2FEilsv1jviYMWFarfg6TrvYF3374eGZvotDgLqbCM7l9Qeiu%2Bzl55XoPcSH05wqRUR5eVP5AtNPusl8yeDz%2FhBgWiIsE9%2FIoNNP%2FVrN%2FjNJVfvUAFxAUTgNVmH2sX5LblAJ0Vp9XEr4wDmjQaLYEsCLo7IbAUwYIRuIjromv4xUOvW8dQ8F1MyDISbkfEjGwkPrrBBEf9JBREYx1zytkdGsvpCP6mCkgu7i8iqa5qipfpuaci%2Bg2shfZs0fKXCJzmlefJdhGYEoFwRaZCw9%2FlaM5Sz6KDI990tE3JM35BuWXOfEsdyGPZ2r%2F6GZKJ1voPYA526HOtNRym9enaLRe%2FY1bxKoZnRKVG7ohFX9G7GtsopmkRbvYGif74URPnrNilHtL1ejvSrGYlUib1J%2BPLw9zPAa%2BikYuEc1mulDtsNioEMLHMyMMGOqUBRyk9LqdDTzOFZhZEbDGo%2Bg%2FbcHnWQYJSr%2BBQ40vBaLWjY071RduaB8tSIIz1elADsvZudy5A%2B%2F35s9xOaBJLzJP56Jb4INYkTsNa1AB%2F9PK1e2E5qtNmTHhj%2F3BENQ9rIfvHOeb16kRvMeI%2BGrh8%2FBKJEqME1Ek5meeLU8CdLfXWiY9vBeO8smzDhqlAGhiIzoWcIfTaops2VVDMVSpLbUdcwYGK&X-Amz-Signature=033e56b0eb34c148252d5db58ab421304caa9244dad2f78a04b04e6f58a7f498&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
