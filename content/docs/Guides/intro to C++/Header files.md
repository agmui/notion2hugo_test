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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY4A6DE5%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T131930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDv1YCr%2FUsc0KP4l79SL7kop%2B2cC7D0%2F21%2BK8QN73tvQAiEA7hGAUekzT9cReoHgYu3Z1lp2DinjiHJ1o4reh%2FPdrfMqiAQI7v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFFIoALZj6jqQ6b%2BtCrcA5RdIxB6C%2F%2BZ0FxiAf4%2FKpwXEHZpXFeauP0SCz%2BlnzdbCv8iynMtQO9dHOalj%2FCmpzwTEV1J6C7G6po60hY148wJIDIn%2F7xQhgrLwwgaMmbt5z4dRpHY0ZFNs1fBMLTHrPW%2FKflxR2fIEbr862zYrURul5ZOKce%2BAXixXzOHUGz7VG7BjsjoACa2WgyPduXDgl0KsODyGXGqTyv9T7lbPfTeB4vMLoAEZB0mmBNN9g8cpkureeJsJQplQLNkZC%2Bv3RAQivRXwO2m7CvbTr%2F2befTKbNL69BSJwJ7Fak7hC5nlDLKr3DuTkc7RRKn42xqBQbKvMAhJ%2F9x5SUEqu59Lf1pvUWBoxKxFz0qMbIeMk9eWUcwgLuKOm7FKg%2FrlLCMqip%2F2emzHb5%2BiewdfBx6sjOO9AYdqzdCV5Ho2EDaubZju5AWx68xB%2B31HYChzcY9YvRgZdOgnP0oGpYWhRiD5EdiP%2BgydK8Z4M6w9vjugsDvsJUzroDlCWjety1VLnCGB5zDBAatsN1toiWZsc5mHJP7yEWqcmrsRIDZW%2BPuVMVVycBCt%2FjgjkrhIK%2B2TutfETF5k8m84snZBT7UqbbgEjdeKuFYT14JAMv7YpRJjg%2FQRCpdZKYvs9MwGev%2BMKP%2Bub8GOqUB1fv1aKbNlxAMHJPl1OiFMIp1cAcxT8OyDUr4qsQkdjAfRNSpeFbs15y3elk7fJiVW%2BD0Fyvtgq20cRkY44VBGD0MdcQ1OgR2r%2FisT3QEPKUFYbytjW6jpWyXdLXRxf0mnnSjVOC9ZD%2F4C4supWzT1EBejsBkP0yP5JV6EIW86X1lpgwKgGPo9g6rGKGTbba6T1CoohLR%2F%2F7i4JvcpYfwKr5Qx90M&X-Amz-Signature=55b8f8f4eeb6ecb60b5a37a8a936dd64a4d5ab6d5439cd96eb656bae5dad6bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
