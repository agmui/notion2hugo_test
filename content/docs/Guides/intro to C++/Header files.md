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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UWW2MMK%2F20250714%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250714T201027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIGEzRgsFI6FbP2HaU6SMxXhcIW8y%2BSQkUa76Skz0GDWnAiEAgoZ00cXaJa%2BwKmDCXNnXL7no4FzoSmrZW9lNL3WSAFQq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDLIMsEPSREXcxwwwHircAzs%2B5vuQrHYxemRYPJhz7uLM3%2Bln3n3Db%2Bd9ZuTq3SptUbSStSCcMvPeVSddLuZqulgk4H0t5biD9fN63ItSK%2BI4GQ7EFmUumGDrfjjueLobqKbSLMpU3QYE1Z0mhHOV2xLiIlu8uzEsma%2FeRh551nRIlxqnl4GM7d4hA%2FsrZlNDJ0ttsQc%2FdEriFgaSxnm0XAVTfyg6mUnAIctvxGSSQAzOClm2EIcC2tpf%2FFQMFPoiPPIptA7tMG7%2Fo6EfM4sqJi6xQwCKpNBZ6ZGOfu3Tf19nGNCxxNyeorF04SegpkA%2FkpI19u834%2FUWZvQtM3j9sa2HkUIcNrP6WDnRmQS9lEtWjd5Ayq36b%2Fp%2B7LB2O1aWAKCM5xIn6r%2FKHu%2Fa6yTM2ufdkyiX8C2dcfArfQSjK68JIdJ3Z%2BtxZJOEmUaFClpAaft0oU%2F0fSZBdhn%2BL0gZCQTzYwqJGFVh2Hdi5tWqzTCWxxzpBlVCqcUZNmuVEhzYI6CCcC%2F1jS%2Fu4ORQdFK9TqNnNSigIOW0rt9AdtCBWtEDQWaHv0CuwYEL51tOE5f4lyMtn1v1PDoXaHDQ%2BtfkPE%2FtQjGZd59PuGPdry49nt8McVDueFrZKB56S82pR3mnW%2F6QnI%2Fe%2BBhX6YOtMPOj1cMGOqUB4XId4Rk%2FEZ2xJGd0tKG6PVOksx52UHYnjpqrCcyUsiUpJjJM0MBHHDmgGUdM2rDrQP5hr5saOi54KhQgF9l4Mv4VsQniczrJws9ZdGrrKvbVLuVbx9GzrGWeliYiqR4y7DFjQJptslS8ChQX2OTsiv3DEyhjHiLkC%2BUUR0VPVETsODvglRihcB4mOUSeUVoAmZVrA8B%2BvMDJr%2B2ltbsywweIVVQ%2F&X-Amz-Signature=acd733ed19d5242b5d01329c0efdb061efd45ca79c2067b04631236a3fa3f9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
