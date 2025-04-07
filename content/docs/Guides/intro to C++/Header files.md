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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE7D33IM%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T161010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLHg4F6JN2Vz%2FCf4JcUQMAiFCbNwleh%2BeS2ZUuL1x9hAIhAO10ig9lCqmTATlxUh%2FAT5%2BH0e3YNO7OY129l1y2y4csKv8DCGEQABoMNjM3NDIzMTgzODA1IgxLER8tRZOyA5VI5XEq3AMbXG1huu0GcnFBfK9NHCFtlwkeGahpY%2FE%2BTCcm9VvdftrXUCbk4BH4KK9DYabTHfyQUHjjGPN45bTDzgNvwlxTn1FsGWcDVEzd6ZUIfM8F1R1oHZvnPI93Opbov%2FYn8c0hO%2B55WnJytItvENw4BYux7HlHELPBvgprlF38%2BIBA5R4vvPr3D6Mt3%2BJYFcKzxTQZGHhnPup8Q1hZJz8GG6ozkkHYZL%2FnINmBPaiE12MljwOv1Rb7SRiyk0lPcguX%2B6DRwRMN5SV44rGMSIowVZv68VLDScus4LqpweiHsYpMoc3QScW9MOS1AIEIGMSwBT8rgX9Jrqc1A52389TMceAFtAoH3zIz%2FGc3WWlM4soLAggdAgyhQmc1SkInudp%2BAsqvI%2FXV7CuTUMZHcDDmQ0x6fC1PEWfHZ5TCsqj8L67s9ALuROWguAqMsD9jObviYj6eE7Abyl5D%2Bd9HL7kigU719USrlMGtqSxfZPgDzZEsBjYlAuPkC%2BUMOrK%2BVJqr8XvAPkKPaKUIbY2sCI03Rdm9TIbDh9Fh8Gjb4fCH5L4cZWD8RvnlOWA%2BBfkSzFlG7R2OratWSd6jXwJ67Cp3JPG8XzHYgQVFVObVtFXZRyn0aUe9xPLRS5BkL5oD6DDv7M%2B%2FBjqkAclmDDJ%2FGiwAsDC3L68lcZPea%2B7oqf79606KhOHxZ5MVgkBvoClJeHpPUGzfyD9lUH03Tf7OuC4l5f0wSdudimyXkL0GsLLd8uRFZ2q%2FBP%2BwjvuT2yyOwV3JLTwj4uB0PbssO7uzYBp0ucPetpsJCTwlLlRQorSki98rA5gb%2F0xPGnja4UupnD8Mz54PEp18tedQK9jK4y%2BltAsn%2BxmN3OTDtwNM&X-Amz-Signature=49022b5b96dce5821311e30b336f4642f794fef53e80221e4e0a428c0c725c4f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
