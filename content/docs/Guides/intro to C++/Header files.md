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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VU5CAMF2%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCHeeNx1SSEBtZL1XCd%2FrC%2BX8a%2FvYBUiJgLbwMIsnJkxQIhANTUrNhznZzhEgr1EkCRrpQfv%2BLZ92kAxRCYkt4dj4UEKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzjNEsT69P%2FGQgyvpUq3APoijmUb8qqNIPl4T3cgEfc%2FI2OuUB7EGFTqTtTJXhULbAJopqxSv2Mju8%2BA7T9hUDwo1xr3CTGhvl%2BbsjFjB39RKpxobhRS7z944Vwsif4xu9xmUb9DgI0mBxO1m%2Fx4M1fm7LPkPwRgmTb6eP3KgtBT%2BuJN04qVybS96NMNG0Lb4JJ35zPABWq4Y099E8%2B0e%2FAMg6w%2FZAXZ5hAVd5xKu7zkzH9QF4MyCm9LNdVCAghRGcIzD8qXjGymw6oN48oe%2FHCgJjhUto7MIRPm8vg4y9j%2FMi6A%2B4m6exWvSJ2Sl%2BccrR%2FjgJ8pMZ5tf3Pi%2FV3jQAuGZdpUEh7XhlWq%2BK4FunLoXNQxEHw4Eplzls9Qju3EtGiUIGac1BIuvGiHKvAEDuo6wUvBuoUWhMvTC4%2BsdgpnsHypn%2F50Tfqz3Ou7HU3v%2F1%2F6HihmBQ2V0fDCxgGMRWVeMzHcGDTWXBzPP5DQ9drqB1SvmVYKoj%2BC%2FAro8bW4%2B7VjxZ%2FPJwAWk%2BpucESPFJjPJQpHJ%2BoAK8%2FmyTNgAiAzbtbOjL7cvWONyFsMsbLYZOIBWZWZnjrPxJAmZZ5HbQf7fA%2BlOsJwOoH3dyyygmdO5RbaWnYpa7eKXXQrGlxJ9JFy%2FUzpTGjPOUiGjD2%2B9a9BjqkAbv7E6Sshn%2B2EwLVAALfdQlkq0m03QTBXq2hZsi%2BzpxrOBSSq317LVP%2BFbNEo%2FouNi5GwO0P5SpiBlEdX5WmIRskFgY9YG%2Fu4cuI6L%2F7NOjGNfOxoGQ4a9sD2RANHrXbLRREvqBGkcViD5v9v26kz48owaYt60rpVjObvj4a1eVL4HW1aqmUctf%2B1EGn4iOigeFaD%2BAs2d6WPzqtU4Ot21xTBU%2Ft&X-Amz-Signature=5b3dc05862d67fb9d1abbfa98f3701371c15f65fcc1be3092fd689ca5d1d5387&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
