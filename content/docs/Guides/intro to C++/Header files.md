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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EGHNGFV%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T132901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIA%2FXPvku1dpKNDy6x3rGaGKbdzPzshTdV%2BAgDeeJaoNUAiEA%2Bx%2B5dlqSK6%2BAuyijIAfa8LLBQ%2B6Xars1lFC5X8kRNLgq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDElHjY487SEWVnlAPCrcAxJcpKtqZm7n3%2FIjugwfWzzfj6zhSjAnRXYWoQWrBjY4P5tqr3cO2ldj2GXwD3c9lMtk8qmNr0X7JHV6I2RAejL%2BZsPuBFUrWvd%2B3RaqKvbz5jwA%2FHGR0L3y8yQgmnhC7JPSyCTcdSZkq9IUr4Z78dCny%2BCep68dxbXlqc5M6Kmwzq1jmYS6E64WpFXiq7%2FnG9vY%2B%2Blb5UVXvzHPGApa6Jko8TIy6aQ0GxmHWuMH%2BUPx2QbMioYig4MfxzJMv8MuSxvJ8TuSEsRrTdG%2BPsDcL%2B5NOA%2F%2BezbclxrXHs4lYzh7g2vWLYMxW5674Q6S5f%2FRuH%2Fi8DOTWJZtTNtjeuvIAx%2Bd45BEhv0u5YFJh5McpNI8xTOdI3xfvT76hFeVw%2BdxaioPbT8GvckXDknOPwJCcS6x3Uz41DlDfawRm6LFvzTXRFsdGigiqJglcSWUqkA4d8Q%2BkkVGiSyoftrGZ2LMmxvIPKlx%2FbH3pjqJwbx%2FC%2Fw7HasM%2BGn3roY2I51VgpRSm7p2iaB7tzH3kCImyN0vZuaLFiQZCev0kEJquUXHoHyIoDZIgf2YxapIk%2FZjGhSw7mIDQRqFvZLuFoe%2FfZl3y7GaNzA2durC6hGbl5IMGImElu%2BwiOrf9MpatHRpMMSGjsQGOqUBMbbbExj0j%2BZAcp%2FofFVyZSca%2FVh9D%2FEkV8FQJv5%2B0zG1JrARpsde79S368%2B%2FrI2xNBxRGJvIyb4WV50FXKhBuYaF%2F4gDww70eGFzoL2iE4F%2F%2BGgs%2FAwGbUqPk556cnAs8dRmBAkSka2%2FuHH%2FCI99Sqhw2MQpTCXQK6oqV52mFLT%2BC%2Fu2i1yNR6Ex5O72PylckJYcx5WuknD0e%2FTVigp3d293T0Jq&X-Amz-Signature=95d8f99bc715a5e64116877f7c99ed09a3d6b1a7fe4e03afce2b8997d2c21c3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
