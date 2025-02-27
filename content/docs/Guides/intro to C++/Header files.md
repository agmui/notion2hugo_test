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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2SPGTOG%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T050819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIC1HOqgd99Affh0xq3VvRnYBEuauJlGb9hLPm4yEy2K0AiEAuDts2DUZ3Oa4uroShUQIF%2FzVXhDR900XUCJMsGcq9K0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDI3%2Fb1H1KOI1bAkdLircA%2FXadEpGd6yxxquYy5oAGdImR7BKZxSImkmfEmDfJRERtAiBqcGmx%2F1aofmjCYDFcwo2Ol0CFLj5oe5O47Nh4ViqetQjEHtUUBE0JDJuKpjljuPRTk%2F8W3Dy7h1UK52LTOOJANOqxMKxcy672mOfaXBq5JaPR9QwMS12cOTI6c6mMhjPGrr%2F10TlRE1s2YGyI3z5U%2FInY3r2sayF4T70GQZFH492UHdviEzBuN6FH0WiomfrtOj8htKGBg61LTw5gTrkXoKqO43fbUQ1%2BvS%2Bf9a294iQbmetvcR6RobnMH4cmv6ov3mBf02dftHmabgx8053K6FiyZAyJcPeK8VZtiyKPrOYv6ZW7A8caCgfmbJgr0N25eiiAeDILkJhXOzbi2IRla%2BuN%2FPgfLtP9Vu%2F7kJ9QoVud%2Bd86JbjDs7xt%2FW30N64AfKNPi1%2Fwslz%2F9y2tZHZPktMeUhERiSV6QcP15C2LEqAxKWxqaihRKmbHjFZmKBH0FDGV%2BByADlluPLH6k%2F4qBTMu6sBH3cJ37kZc6S0xghQbh2rCOofxNAQeS%2BZ1ERfTUlekzPXV8a%2FoZaI5yJnMFxPo9WbAn9TraqaPLVK1zrBuZF7YXfx10knbdpwBZdXbTLj5VsyO4vaMKXQ%2F70GOqUBbAwOo8tgg3Cq%2Biuqf4fM%2FkHT%2BN1EEytGDbXe04DFmfT6%2F3plYylSkWniNlhFkt1%2Bjr4tiZ3yWuz6NkbvGu1I2cAhbLPf6Kr4cIa68HVh4GmPezkG%2FNJ9wpFd8wLD2oDXyQsHVYI%2FLs9f5kCNwpuATAtlWWLXQD%2BSM%2B7%2FwGCa0gIeyvegouCmV6l2Sb0Tuc%2B7RmSgiZ8UUIcgM3CdTJc%2BeQBOGkaa&X-Amz-Signature=890021d75ab8b602328c83fd27c8336de0913abea1129426665f5f8c7912e1d6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
