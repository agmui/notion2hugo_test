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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S774GL3I%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T004213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQCD%2F3v7rsyfdSu5FMOOhZfI%2FleNqKtKNvywFLO7W%2FkokgIgOj2UDC8%2FJGF99FH50PBOL03ONh4ITVXvOusAqxk9SLUqiAQI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNmcizxXuvYfLGMUfCrcAxZKqQMacKFZRnVbt44uZl362DqhTTsp7csGtV1ZmiOsL7ZptO80izxl%2FI4mbL4Z%2FayWyLJpHF%2F0HnfBugBSar5TYZDEx7yCz%2Bl4Jd36pmwr%2BnhpDd8Lf9nLSxBsOco81iNag2i1fFGXciiegojaBMx%2FYdmMZtIKUdmIUu4KmVnLQ%2BTxHKbVJA7s5QT6ZJlOZ0FtLjjA392SwC5eesdoG8KjCYY8Buf4RMtAgwqq9x9LH0Mu8CxJH9hhtS8mx8ZFPmM%2BNhhyQ82qU0qylrJkm%2BIw0jFv3RrtXMrKeLAbeWGlZg3i%2FcRFjE9PLqIIwoiZkYk4QMzdWGJ2TIxplGDKcqfyE%2Bow%2BS%2FYDp3ez7bI4rTa5LlZ4seWTFStCVZFD8TCTpnazLTAl84oCwv01aWtlpJU1axChL3QFJrOuQ0Qo7gMu6jXK8r7FG8gmC2KAMNWp4xMlodLsFdI7TOx4yQJTF2s8DEBM9Zg0bwBFz2z5PKeGmRjQXwixHQ38z2jWhKn6s%2Bl4ogSlXZImfnvpPqCwdZuBRUL9DMKt6mVBa%2FK%2FT4dyJMP7V9eMcvTSij%2B2AlDW26PxiaYthdpONLMSz3yLg3QH0VR1nK9E60C%2BjHhtwK%2BgiKwFZoTMjK8WQsDMJG2qMIGOqUBPlL%2BN4D5XfuMJG4B0MV92gR8bIorQ8TxG%2BpuwLJCVtyQU0zqV%2B6%2BhQgXuaUOKmHtbGDMBuakvuKL6uxInEgkxZGfqaWRC8gn3CHo7K9i%2FNldorlJYKhK6AzmFl%2BQVWdfCQVW3W9cVQy5PaH2PUd%2BKzg56OdkKEbs5BChm4E9Yxn4ALIg98Yu8Y9oGghLbIvuBkWQ8zPiDmZCW%2FPPAfkOi0U8J%2BYi&X-Amz-Signature=7574be2d6b10cde6ab921f696ea60b0cf4d70f2af35b6f36d791292814a532dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
