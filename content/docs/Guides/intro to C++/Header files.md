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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656GZBJEI%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T003915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJGMEQCIFIu1iZ3CsiqWXo6L2hgFSGUcj2O8U8U2JqKxhmQkwzsAiAAg4rUtQkaBRv6AjBpb6eEh1Kf5OnnOrA5pY3uQedNeSqIBAjh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyMuwfuTpSoU2CEKYKtwDDiWa7e0qIrlaBfyxnGScieIc2NmRkLjjkWBa0c8mcfOv41vABxxt66ML9npdRHsBaoGPl4s5b0BsIC5srp60VKZDHOC0AzVh8YhBLmEnE0Fwe1onBNGyOeSd1Hd8kdBTrM4h3qReowv6RE6P4Z5YriSVTDyy5oo3DOto0bT0s%2FUo2mJ9bz199qfWxYy7asyvCVTjuNfR5eJ6eBqhRo%2BU39QQ3Tt%2BMD8P0d%2Bm9gvzLwWSOvzA5Ql5nVH70oyyCnWl98J1uvDcjMdyQZ%2FElo%2F0wrcJ9Vovvg7BNeEw4qlphsHzazWewu314s8ZuUOSz0H85I9mWq5St97YJ3ZM1sxGpzBEvmsJHOm%2BS1FpONMHKK1r62T%2FVAX5WfgIxFdcOvbVR0Ut1L2U0WGuCt5SFu2C%2FWHdaB4ZsqJttp2V3J1%2FukJHoEb1FJ29ZJnF7y3Lplcblg2h5WG8E11z4MmMDmWoKYo5pDKvl5knmTa4r8BFy926sI7c52Bu73Egiu0fT1insyDxdsyRZ8Wfr2WmsGVizyx4e6RXQuW4%2Fa3uIiltW4nhOg0RkrwGuPD%2BikKCUuH6UcXIKnfaUmgNf9OdzOHc%2B8okKBd37n7uG4URw6NLiwX%2Bh8y%2BYGwATmQsIgow977VwAY6pgGXMmKrHcQwjm4jT6yjOkTUp1Sk36g7Pbu4EEAGYcEIs6vdjPz5Ql9udvGpXfb%2Fw6vfH8mc85FWDi8bKrfKtvKOGzhtwsI%2FMS%2FNypGpu4Cza8k4LkA8nRlTc3ANYh%2FSTMwnplisccTIeNOZ%2BQFi4bUln7SDAXhxZb0%2BcqkaT4KKUbKlLb3CNyaFeP%2B%2FCDKC%2BO0eunq69DYeX2jo0gs2kWE06wYsjF34&X-Amz-Signature=59acb579588507909920f8243b0c814a8ddb671639ca45dd145660c988c645fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
