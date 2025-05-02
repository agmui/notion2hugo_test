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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3OHNKJT%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T050918Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQCyWktaH7P%2FUEjKsxtXHQdKCzOeK5p8GPumsRqxlZ9U%2FAIgQtfsVRoYaFs8YTHlM0I1wsNqWlZuK6m1pbwzh1LnTR8qiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP2mCmwvbn1EhlwNvyrcA7%2BoQxmq23yLqtiaFKRCPLeE7GY3FkeYxQI6CbQuYGiu5YliHWVTpYR3vKwaT4b4MnabuaMmtNk1xX%2FnjlOvIsRJcNZf3Y1J76VlEkc5axylAImA0vSqXB5XA%2BzFyrr7P25R1Bl6q%2BS%2B9JkBvAc5tTPBlCfIx74Z2%2FX3HF6vIFeQ%2BLM4R1OyJ87qaLIiw9IhkIHFm%2BJKJWAtqnF1W5LazGSC6ablHnfZ9%2FkoxOLNZ%2BNwUxqr%2FhvGpBDE7BcQeG6tCVtMMokpGfyBhJqz7fsQqdKiuHxay5XO16mfHUKc5YaBj4Wrrb83KLGrwDlV3%2Fm7XL%2FGlW8W8im5qQTt6hn7ZvrkNvs70y3%2BEzExBsBP2TdsdaF1FXovGByQd6go2XsYgLMMdRvdmDCKXX3%2B9ufvWAfa2BDfR3jOujyo%2BOvLikcB8xkGsYnAPkT20jvY%2FtzSdIEX2i94TWEv1B90bXDTmWWj40Tqw7SA4mBN5vI5U%2F07EH77mUzhw3k%2FO18yKJPHO4HYuBHJhlJxBvw16kw0%2Fjwy%2BpQFg1UuYgkByD938zdZ3ZZtiObBmgsTDSUYDti%2Fos6LLlvHCXeVLa0V9M555P5Chfjn5vuT%2BJ7eGZlm7JMVYWLlJ%2FqcOTRpW6tYMMGi0cAGOqUBhBgtbYsUAH6eRfLx6DihDsGoJRT6hT3P3n7LCYL1BOtxESTWOZatTPsGpT5C1dSAoDcLx1czjs%2Bz9kIMl7m3z2ffKGkauvcXrxEb8Tal%2FdmdNIyBgyY8Ey8IAmi2AlH097KWjyIs2mAusYCU3ZISuOT19DlbnzqopKK5I1U7Dhdu6kIcYcOKd5v6plq6CHU3z7pVNTzXLINR3w2OBC5nlHHhBkaq&X-Amz-Signature=ab26ba7fbb224cf5e310f70f8b2db83c9c94931c82c6a19ef0581d4ad0a5034a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
