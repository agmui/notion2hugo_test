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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QSSW2YE%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T061040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDGNGihxhFMRhz8PA4gYCx2hQ4P3r2utOXDtDSkf%2FBFXQIgcAxRhe1HnZuYWnejoNA8hII6EmVycuseVRBwHuNEfNUqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGt2xaIr4H37FO4NcCrcA4fD6e6IG%2B1VFcjcO0fSdvaCFAg1%2Fqv%2BIkx%2Fucj%2FtW31Ml2AtMtOUmQF%2BK%2BE%2Bkh2L3wwGOqQt5W2qgScahrnFdrOOCaCQHC%2F3cJQCfg1towpgZm1deXwa9OnSnCYyPwQ8pZuZ8CwkQPNtMrU1gGkXCJS6rc8uD0OAuNlfpUYbE4qAcJ4l4RCvhzpVDzDM5F2e5F5dGh7nT4scXP1ad%2Fs8wY3PkOdAs3SbTNGrtTjJLYi9yvMFGz8yZAjKxLQWIJ%2B320tNkwDe9qNhhkgXnV56G4S0bfd9YiyO%2FP84aDouOgdOeBy2EoR8F4MN0Wzg3KM0zR%2BA7vC08rQd5Dx7IM8QYcTB%2FQbWaU8k9yWPAPSb6WW4Abj5A5GVIbanQ2AhkH49e4Gen1n0xFjk%2B04YI0QjqMzhyGURD4VojxfDOhLPy43%2B10uV4fvTbD%2BHBTzT8RlsuqebxuKfNxn%2BfFNWmABYirsiZSBv2URxkQaPFDNQn4wPDh3LewajxsNSG6TfSWZPhpqK7M5sUVVFTV24BiJMDABwRjeSVC%2B7%2Fv6AqwBU8PQ%2F2HA3cpiyHPc7YGgf7bc%2B2ZtPy7MNqgvSMJFHdd%2FkqsVj7e6gvcFxt3XbV0j52m%2FeEgnma0MmgdlMrhzMPKG1sAGOqUBVavNooxQDwazrtSZffa2Z8YUUMGCLMhcyM6ZIUiM10Kyw%2B6uA%2BcQSLFLePT7t%2Fllq1GCZZMcCIL%2Bg6OLkbfF7W5ZyXCxMzIOHXfiNY6m4GxOiTFmke5TbA6FMtMbPvwiTD6Yrpac7gTmxattbmvtupCE58UO8owdiP2MJmuzNM91hpXrISZQ7YJ7YiiUA9VfuabJGVO5HEZd7bdq0iFZ2gRpv%2FH7&X-Amz-Signature=fe5e69046e06ff7e83cccfb95d2638173a0994a95e29273d7c600da98b72463e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
