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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTAS56TJ%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T190707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDWSlnNJ9xztGCBnwq7siRuutmpi3tTdzf56mDdrwMoZAiBhH4zJw2EBlCWQW0eaiO0pAeC0r78d%2BjUnEWW3SzWJ3Cr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMVewStIW45oAHf%2FWrKtwDlULcifhJnNRZaAA7DKYGBQP9STFQkIHcKimz2aW5CiK7Q4lnyz0lL%2Fn%2BrW2Y1htP%2B1nCVd80Ma2u3E%2BL64TS6f%2FMFvxsSWMtR8k9GvubkLn8rRPfB9mPwflLbLGCVHiTsb66kxl3CpvUsOGTWLcWZ1yO6iQkTIwEv3EiU%2FqhzB4gZRzQ26LgOyXZXZt7wPxpkvv1URLO%2BxmZfJflXDRfWMpdRh9XqCawvuUNMLB0SuoXQ96%2F8otqw7PuBy5c%2Bvh1y1IVECvGZ6LISIac6qR9%2F%2F3rfJLlEJS%2F527dXYGasvfjfbUeX7srjj16LwS7fjoIDWFutyDWLvVVffBsEmq7%2FIQ%2BtWmB%2BFa6SeSK%2FGR6mhtOfZyvCcgmsM%2FOpT1J2ivMwVnWnj95SafCcTAWRNQMKt6FiPAARi8faPwVcMdoNXhivEjxPRTqp0IkwXlTlVebqZ6g9hDaspN06ujAG%2Be0MlQvi9je1MlcXD6k5BpiTZ1ND36LZGRrol%2FWkcb4HrqlPpRiY0YU3GjjpxP2ybx8HIHimSyTzrfa3uGQwi7Vn9M22wtWnGS8UwpuNuGptbcVtiOwopH8ph0FdM4dGt6Fk0ZdX1TdFxFI9ai7lIo96mNFKlvuryvLOjy10A4wifjcwQY6pgGkWwpjTrd0q7G%2BTESogNi6ywAveMpVZiloCP%2FJbdSEvrgEkPkZAKO6azjby8YVzUnb56Igi5xZwN3l7JFLsLfvL7AWdc82521GKjiJJlwNW0OgIfVAzWgJkjY73Pxr0%2F5QWR3WFB4c5J6j%2BKWPLXUaKWMebAgfCKhO%2FcpGFryoPddLAN2GPK0uNY%2B6XhiKrBiTHozK39Q1hzIN97lIkvtF8wKTo8w4&X-Amz-Signature=1f150ce117e47e28aa61a35bb1b3f4d5498ed7f4e7b375e476acf00b847c085e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
