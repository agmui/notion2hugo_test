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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2M54VEK%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T070920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCgykf8valmO%2FTikdT1tOeCPSBW0%2BMXzQO7XwK1hSC%2FpQIhANDQ4cOMkUR4b9FS4z2%2FG8jqJn%2FPeY4Eqx8%2Fopo%2BWEk3Kv8DCBAQABoMNjM3NDIzMTgzODA1Igw3fAFWpZmRrlRPU50q3AM%2BXlpJQJNFaGyj6tLlXPWljSjfedfIfqVhgCaRicyxR6gH45y3M3evuke2%2FGhu7s4Yh5dQIBR9JsffdB2ftsml%2BJE5U%2FlOLTDMWxgfG%2F13A%2FhcQV885L0GkoZs5IfSaOoI4Lw0mudV%2FrgLZ4zKj96clgKZcLOWhWKLO05aB%2Fbl1OQZ1F69C23Fa7IMfwE8YxLQv5%2FmAlMUMwz3cawmu4N%2FRw78wMFmYE5QdBzug4dBWARukNY1ugoRB6RYRbaK8oev1zJXXRXEMh0Qz5Qsf7bvhPIVDGcvPRcT7WduJOuSFM3GZFRMWGu5beOEvpTldPNcpm4lz%2Fj9u1fUaPMWxXZ1ogxSEH5oCASqAUBet7A99guzQeHNTOo7IcyIDiPewwh7S3E0%2F89fTfcJ6W3IXSsufTNo%2BWcXSunagxl9%2FQnZJ4X8WPX409CQ5XSNsgaB3ZDs1kh7RE1RyEyPDm5WL2nQm3QkRBJF%2B2LraicVSiXbAKvDwysE30onLjH9Yem4R5f7vyH3AGPDcXIfAEpMISG03gGfyBD8KiDt0JucKQNOvbB0x5rbayxNwSiJtKsHuLf6bP2fTsSsbq1C%2BiGICqBjbxZo77FVIa2VxVHYDE8sHScc%2B8uVuZjj12ou9TDA4%2FK%2FBjqkAciHMLnEAMkNhb0d94UbYalHJSqGakxnVmWemtskfkTN9oucHV2vJXWcPsU468HYhf1Bk2W5dVzlMoDI0dSwYOHPwp0OvSLiDVT6GZ64gOAiOqv1OflWRr1z%2F8U02H%2BSY0jUITic9Ock4F7hWuRPtmQBUYQTnRe9WdPO45Dj48E3YhtoLI0mi%2B6OdQ7yOc92hY9yT7SQ2XzBYj3vIiDHwhgnRWoM&X-Amz-Signature=558f94dfa57461c68f693fa88425ab45edcc7494d459fda1bed889d1fc0e8fd6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
