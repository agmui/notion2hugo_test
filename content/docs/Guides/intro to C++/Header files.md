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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46673R2YAP3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUbvIRwfB2jXZzBEPIteDqvmn02xZfx9WLN11mE3l9HgIhAJs2j%2FGizL%2Fb87mQv274C6JFey3F3E72w4TIeCa9Qi6NKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzZXoJoZzC2tdBESq8q3AOtq54bna3gt0P6iPX63C4arE2JHtpxcXQCAV92O9tbJilvGT13uQ0%2FRLG%2BmdDrZeNCtz5JUWGo%2FJaW7Mc6DLXnWYg%2FaZdDAHJ8RBUmnP18MD%2FZ6jP5T6rWsH%2BeRP7O4L%2BqVwK5jJnUKwz1CDjwrLoHxVshEPDx4ibhl4tx625CDWa6d89fS0AbzEsO%2BBfoHTSEkDrZ%2FlG30fjFy7gAxD58VGml6wG6L%2BIlS6SiGoxSoRtt28Gx8603IL5EHfD881DxI2KfcyqC%2F8EoLKCGTxz3c7TlmfJiNO9ugIuYQGl5khnEolk6STpBg8IygcB6DJrMhFaLMMMKeN57Kmc%2FEqxXo7hvnEXIvejsT%2FMQ9pO8wl3WNec2lsqFmwj1yoHJ7jcmltS4XKyp1azSF%2BTdTt81hNnj38JDAa6VPNq2yD3KwiH63kXMP6w3Ts3D0dTyPuZKh26VXFpT1YnQfkmVyqPm1YDUpZ3FCgrSM0gWgkh6GmOX6c3EhhM2AU5sP%2FQ8kY7WOw3xNVo7PgziTnY%2FTJiue0JFanBy9dYDRJMIBLb10YD%2FDLm6jRXnsIYc5k%2Ff0zbjx%2BV2mSKPfChoV5APWq9q3V8e8%2Frwnn5HUFZGfGw%2BgKwL5SLRExjoLxcciTCPsNjCBjqkAQ115NZpQ8DBja3A%2FQHHiqAJC75Fh3tOiJBZkF%2BEQFXjyQFEmLEwnKxVzTgkKimwm65o4E5DiiPxkSDpG4tj8VXSTW8s4aI95WCbLsCrINHdH4vpBPGOZtgV%2FgW2fh5WPy6tIcOYx5VBlSNqCEsMIUnTMHyIDqYPVISdywWsg8euc3t7Krdpo2jSPGO%2BQN0Ft58hix8GfujpwAU%2FUeJeB7MNaxpe&X-Amz-Signature=173501713fa2f633f00872bd42176e6cb435d10599b0207a5ba99758be95464e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
