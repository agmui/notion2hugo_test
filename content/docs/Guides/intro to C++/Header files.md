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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VXHY5HB%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T170736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGtmjtFx7CdXik3WGT%2Bmz1uH3ZwEDohPfFmQr8At3OtKAiAnfh5IFMTJePN%2BlmmtunfMSPjiRGF7aJLKkoKwsZxQdSr%2FAwhiEAAaDDYzNzQyMzE4MzgwNSIMrhyEuaWaRHHVmDA2KtwDhrHJ7lEIsAYialVL6gCDNbjWjI4GPK9P67srVVlDURsG%2Fzijbw1egqtSO84jJpK9pJA9mrArr74oHsBKjyqVLF5qzzOhWB0wVfKTgHTJND%2FxHZ92jzf07bTtfnnfdW11EHheSRUQYrryC4Xf8qoPofQARQ4gTTpBy6hKLVJXSDfEgJISxoXU9qbKJMTNQ%2BZXhDr5P6AE2zlPQJH4Hdu%2FSFZC8BDEF9JZn7XPDM%2B63wtdgTENjVB76grgltegYYceRDWoSCpMxIvymmjIJ0616BhDKQ2otbX%2FDqRXqtDaaMd6zT0DmaTR0WsneaQU%2BDI%2Fy4ECV%2BRQeqQAqi55oucg0f0Wr5vdd9HFTCaxbU0xOA5r3j7sxKarplj2%2Fxqi3WrEJs6OhyrbxhOMR33K6qdd3hZRAhMDlTcgDZE4%2BX35OTE%2BkQtEj25Nc%2FSk07J3a0n1xhtB0O9I1tgjHpRc%2B6Hchgf%2Fo5lik%2B4V0v2ky8aWaf3uoMS2876WNtQAer4ScDJSCRwp%2F5GjWeWsXybo6NZnRbYeQHYGXTHdrMHN0RqP2jKqLM9TCz%2BDK%2F%2Ftv69DagPm%2BakKmSZvv0cha%2F4Sp2jcPbrnPuXflCADqgiVFhK8U1tgRNFJZyYA25fMln8w6aWbvwY6pgGy2SoMqoO%2BBzsE9Nm2lJR%2Focqv3PIsKfjej%2F6bZwsRS9cJUf58JlTDpaF0llixd6nbbYhqo4WJhgbImvwvhn%2FeWybIsbLa2XEQQlB8UtlN54jF6xWuYGHKlslteSo%2B%2BrFPVs9MyU8d85BdJs26S3hP0OXUsd3h9r7bLI4hIgKqkTT%2BtgIN%2BveKa6%2F9sIqo5Q39Dm738ojB0TmCjmTmWCXZfJGJwqQL&X-Amz-Signature=25007c5528e4b05264787fb61b7fdde877bd1f3ee9c0c2fa7187e118ad00d053&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
