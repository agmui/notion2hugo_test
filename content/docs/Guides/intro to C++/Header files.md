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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRWSLANZ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T042127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLqSPK0n8rLcTGSZz6dRdgc72%2Fqw2p8vSqszXHUJLXIgIhAL1nkwjTHPTHzzobcs8BPkUY04Rs8FqtWeVF2RRormu1KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyRJ%2FzmxeUg2SdrkNMq3AN0COmQTjNwB%2FaEyFkeHgByQFl6X12SqG45ptU3U6UzL3XoI06DuQfIEX1%2FC5Jywbx3klQThfBiJeDVI5h2yI7N%2BbdEUuHg6nmWXRRbtPyXeBAUBsbCuFGm%2F4g58G7k2yW5uL2SexiScVvUdmBPuDRqfdJ5VIbktrJkR%2F6dvgL4wwyZIBdw4Fe5uRNLqTrlQ%2BGr0D2nZ5mdszA0YYfg39vMelKm4004cNLCD%2BjAWCBhdGOr%2FMrlU98m%2BcYvyAjJurssYD0%2FcJzzgX713ZPt8PFP0FSxzzmKxZ2kGM0KtoqPm3q88AFrDIKvhEilS%2FXoFptbPvBlFN9lylYncvWkjKPhP1lflQMRtA%2BbVbsnDlxw%2FxmhfibVfMx9VILOs7l01ZXCyp33c2Z5l3hZY6SX%2BZTxCLLBTxgk%2BW9JMFZPCvRiDSfptPQcgfUsEqu77m8CJSbx7w8JGJiqUsS2kEghfUYkOUQRMn7Ol%2B3EcO3MA8FyRMdi2vzW7AGosDhl2cZ%2FO%2FSyj%2BzF3W8VxEzs8ip%2F61tfBvtaYZt3pLATJAMe35I9GBbocVQrNVPMs3TGe9owvI4NSlbBiQ4e%2F3Im6L1puxdSgfGz9vnjZ9pGqmFlfJmwpNZJs43jZpFVtdhXlDCRtcbDBjqkARpq%2BTghsiecYV0Caa5VTuE9XwvlFTsHvAETW%2Fj4L4EzhM4gWEX6WgZ4XbRE%2FGWkA5%2BXGdTWsdZHWVX5qVPlxwxzH94%2BbBx%2BjhRrHZS9w7o%2FQYm4EFCksUUfEJHUflxzg9MPUcu0BmyBQLlLU2VETyoXeawkREfKROvA0NNWDm4L2zT6%2BGoXnD7Kl0kwAWeVKDV9kZW3%2Bb54UuAabVBiTfhFmTTD&X-Amz-Signature=d11194f887d7ffc666c26ee51e8b4d9ed22d14dba6fe2ed888b498a9f1a27c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
