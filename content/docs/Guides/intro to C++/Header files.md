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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCGCYXYZ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T230924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIBTn03GWT6VmyAZN8IvN6TAOTf5WNpvK6g8S%2Fr11kL5bAiEApgL7UTYqwWLusWlPmgrK34zzLQsfsDmHTd%2BBobUGHFcq%2FwMIUBAAGgw2Mzc0MjMxODM4MDUiDMdWeGzmlze%2B%2Fbz4kSrcA8192mK2HUGW78fY%2BeSfQAOH8gSi%2FkmrlFUU7PCOzeiL07nwDH1jeF9Jzpb%2F5h0XBGB4BStl%2BJYVvAZArpaQEMXfP%2BzB1oIFbWSVXABNXzWVJNYv%2B6AV%2B9Q7HvIjvmaiRflBlMyDlwQ7lwZk9eV0Wku2j7lXpoXL0%2FtN5u32NOH9caBnL7IkLMWx0Jj%2B8WFWtehR%2Bt1MEiJMnLlF9SiuvjcE237e0%2Fc%2B%2FeeRa%2F0QK2FDTINCnEwDLEJOYKge2JDkExOJTKXX%2F8VT2mueoTWNvbbP74PvL5e%2FKWgIVzcTp6hbPL%2BoyY0Pzh6wBO1%2BWSdPX9Eg90zkvjkUYk6UBd0muaXdygpJWjNwZZjJ0s44oSuIvOcaU9Uc3%2BdheW7P42gCF4IvncZw%2F1KMIzXVuwToceiaAzRsdwmKFUEHIAvuYQUaLkq3yoIS1xUf9h6i8vi0ZYymVv4CEiCfeS1ntUpz5NcpNUWrgn3Y6cFoR%2F%2Fnxk9tctZPDglPRTx3MzwfXL0XmWvHI%2BgbbDXvWqdn8Kv6dWhEWiFO6tBlGDFsv2KokOKWsssUlvIGRijYPwNF7aq3MH7JiY7ZekSSg6tCsVgn8%2BDx8EtpYSszHwaLTByfTvRqpHPWLn%2Fk1sydpkwtMJX0xMQGOqUBVoqsPiwOoQOb09n%2FfoJ5bkfkGkTWHtaeTBMEU9dDPL%2B5pHpBIZ3z4wrNiACRB7TLn6h2Gm66QM%2FBakLxpRqWGF8WPDVplkPEZAdee0yv0OfwiaOU4aGZFjNzPAjo9uWtBhtW%2F5y5kEoT0uYa%2FVHgntssUg9nN0FRnYxP5tHjt8X%2FskDkQOEqcL%2BQUa6jc9fLjWAQxT%2F6usuN12nqOw94TA4Tfk1x&X-Amz-Signature=049217c25a04d8ca80f30a9d1030c5e9a3cf4a7f7b99409a847561008438b768&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
