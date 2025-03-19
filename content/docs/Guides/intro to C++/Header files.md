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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YAR47CX%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T061143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCsJGq2DROxKfcsfbNxB3DZpFXAfjd8b1RLCbYD%2B0hGHAIgQ%2BwRA6MqjmY39jF3RDJ3jdnf161xrbe8SvQDIMOyKEUq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDH%2FPYuLm1HRY67U8QCrcA%2BCyDcD%2BQAMBmtyzvgezwqIQtJBSs7ezmDDsdqnHpA96%2BbzDLtGSX4wTm1ZXYubJjY%2FutJNAe%2BM5v%2F2GRB94bPYnlJ5W3DJtSnFr56VqUg0iSkkVU2juCVeR%2B3Sah6BzPiFGEW8uqofuU6kLGSD3O0NPZtLmP9dmqt2m0JcOqUSyL8eo4gC0YTSU8VZwr9Kb9B84%2F2LnOXUAGUW26jCfImy235uCRUE6Mw%2FBnWXJLKTf%2F14%2FroPisFBmAw%2Bv3aj0VtxiT530cjhhK%2FAbkMcT4M%2FlkYir74cwgBiaFW%2FveveEQflzpJ8sfh0MM3qkgizvAcmSXfoGv0dpIYoGufvGopYM80mn%2Bm1XkXYfPYX%2B4VvT%2F3MZt%2B9MbX4bXj1TvmzNWfQrFnHKTKfYaFX3%2BZu9xAT49%2FTk%2FfQFDtHpv9gde%2FGoR7BLLra5PLvA%2F9EcXxTebsxC8WhpC9Z8iraFfhUTTrHSQ%2FTECIUXyj9w37rEvtrRdEafOId%2Fr%2F7pYvYcdNoUSbqja51k168GcgvN3Xq06I9a9zY3GW80G8dsjXTd2rQev2CCGDY3Q9KlgrKedzQ6AHrGdusXlaJLXjgFHT7vGI%2FcuLXvs87yizWprc%2BEwsqXhTe7LhebTkhJeByHMOH96L4GOqUBIrPlToeCkYNRLDLVQntSkFmdGKSeE7X52cyU4KZD2f%2Bk8GuNPYGEh0yZs4nj64MM%2FL9feNnXRF1QU7KIqmNVT7VoB0JV%2FLIq62Nds1f9ZBY1EpiX6LWdP101m9vMrlCwMNVdlWG0wkriXsiRqLFXForQ1lCYat4ficlKOCf%2BWqLomgDQQMbBR92pN0OqYQL7fOX6EDkwd0HXVW4ZdrKWebSRVMh2&X-Amz-Signature=a2c720b0a6bd90865c79d5665d45bc7f16c360fba0a071a5bc8bb5c524afb46d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
