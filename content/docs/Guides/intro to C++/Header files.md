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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YF42YYSI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T071140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChTJqzY14j1dGeIJuVoA3q3wYcDE9WC0ARaLYblQVgLgIhAOiZYl82wOwWdEVjs7D1yfD%2BvQFXF1whrCGsjqBHguCIKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBApWfAjh3h9%2FRsDcq3ANFV26u9vzDWGb5LjDVM%2ByHXOJOlpMxcaZozrGNNBXZedk1kDhEPE%2BJczMnJNLM30nE%2FbFZZ0SsIX43aLMR7GAnPKUxBl8gpfEvxiOyqM0s%2BJUR3KbH%2FTBkhs57SHe7aqc%2BRno4V2%2FxSd7oT6Ws%2BxZPzY53LCdkgb1HZM0JcyTf0kdfzDYF8C%2F6fWVWwwa0rek9pDkH5EMMGmAhEI1Z36FIBhCanOXTep4knr%2BnWNCospSEVQdxBFZoDA6qA5TOfHO7FGydeDV%2Fwat%2BefAi%2BNSJp11EWbWqudFbLqWckDOmlaa4PG5owRBRKMX0rMdOIN0m9J24KubNBebTWbfCwiifA5pBAV8imcbx9SZXW%2BYCOy9GTO%2FcGWM2p5CTNCH109S%2B1CGNZ7FYqGqgPer32xHVuKzu2Xmvrnn%2B%2FHfHczj5YkG4e1uroLmEpGjrMt46H2YTJI9hJZmy4mVwWKhciwykzs8B5OuknHjJ3S3CvMAhs51kJGWqZckrp%2B0dcM9uCActPK%2Fc6M31p1bzlYBmAJEg1epjm3W1ctzoIlvov5Avoj9KmZdl%2BW%2FPqbxWbw5KVkjUHXZ3bBct1LJmikp8D4fwEtrxwhpberY4icPwvhIaEK3uoGSAHpW4cIHRoTC3qb3DBjqkAbbYz69Lcxz8w7NTAoaXupyllshY%2F%2F5Ap4DHh5%2Fop4abpX%2B7jzcJTdCrwaMjbsfByBlVm%2F47j5Y%2FkgVfyGL%2FiRGaGKXRAsIW%2BaY9BCYza%2BqoftuXiZ41moq56oAjaBsp0ZI3k%2FNvzZhtfxHMtNhKOnaazvdFXOWsoz9OaQ0CXXe%2Bbs49UfC%2BqXf%2Br9PSZzVPRa%2Bt%2BSwBF%2FOv55P%2BODPB%2F2wMlvO0&X-Amz-Signature=669dfee36e4a881e04e4bd2627ea998235b0e4936997717317ba02e003b4c411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
