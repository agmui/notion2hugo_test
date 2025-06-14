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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNV2ZC3G%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQDQhOxXvO7OQpJWKIleKYYjmhPOvQOiAZ5PC33jnBVFWgIgQrLx%2BwBAb4DzOGwAGJliv2WO%2BQt2hCqii1xWn4zODqgq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDKd5P4VWZNLGeLUROyrcA2tCLZoND0ba2dOzYrkQz42dW1HtwxyJdVyJ6sBw7e8lr75EP5vgPSzP71cUTVBvJEvI4tE1EY8Is8HuqUhVXTNAKmmZ0WaymW2%2FKaewpgqvUP4WmqW%2Fmx9sljcH2sUD67JFtCO5kqrHVT4OZcxQXPW5aACRtNm7w4pPkXUJhI28CQf%2Fn5DrH5PvNrYAIUfm%2Fdh4fAkyoQA3lrAUyuWod85MkdFmHPvKCtI1xdHMELruTs0a6q9B9Kh%2BcuP5qmlL%2B1gNeP3Zn7pvDxLL57JQo842K7IyJ1I4WHDEjBHkHSY4%2Bt8OlU3ceT5aJn01j5k%2FRbMpjI3f3zrxXPwlbr5GWKOZ9BwcTlZiHXxtRRVx%2Fif96wES3%2F0REdJ1tpbGDXwEeSeejl4BCKNO0WryjLK9%2FTFes%2FeAAYPrB9GpKovSL5pG7R%2B4qdbOVb91e61xXyrlgXjar0eU8Aa6owrAd5jzYtzjpCB%2F1ubSILxyOY6P0Vbk1ci9KSQCGVF8d9ogMpAYoNAz4ZNq22QLmeCuQ6MEyRSUJqiWbJglMSReQJ0z67x%2Fs0fkXGJ2SIyygHtHs2IGlkodnDDytY54hKPMtRlXwU6p3QNoiQ1yF%2FVfUvN5FjnRVS123Vx%2BIDN7fFRgMJXss8IGOqUBh2HkhhSK1ubRW83yuYERIbseUJrFCKyzlbc6Io6dsvATkTCCHVyVr1BwaOSvPfkiv51GpQtkmETPIEQpkhb%2FdrIN2mAecSAzZ37rlIicbGfx%2Fqng4BZJiQ4eDB08a11N0Z1g9IYkzrdra2ksL6gieGzXeyApTjZ7HwZoCvzPTs%2FKSzSZpKrKg66h8j744NShFIAGnfgNjUBz%2Fb4PldV8OGjPqNB9&X-Amz-Signature=ff7fe1ca7af659230b717ead62e0408da5931098b13214db1876aa6dd7423041&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
