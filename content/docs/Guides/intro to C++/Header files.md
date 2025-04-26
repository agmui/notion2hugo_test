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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SWVSNGEN%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T160810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3rarpnwSJqJwwpIsD%2Bj%2FixkKDndUxNBzInkQnGZM7ywIhAP84GoCSUExdhz%2BptfcLTu2PwMlNxsp%2B8pOqtgA4nJOGKv8DCEgQABoMNjM3NDIzMTgzODA1IgwbkvoyoKDLS%2FBa6Ioq3AOvDkebH7JQCCjrClmr3Kds%2Bl1uqHU2Hec%2BULczTZx2x9hPWqDMUoH%2BJdSYwliamX0Xm9BnXetlVWUpFV5rwrHRW2JnvTzrQ6miIZS44pRG3Uf8L22NrUJ9L6fy7nAq36ekTZKeJTx%2FL9lSL7Uvij5y2EpwyPdMKXAvGWj%2FUkagG4H%2FtX736PNVj5Nr9wbPm%2FhAM5MBpAHqL9n84a%2F4wPdUpNX8wyn9oh7%2Bd38fOj%2F7aHHnE%2Fqvo23cIhaOK51Ris7jmIyhLevdbbi17Sfmb0HglMraqgiB5mtRSI%2BX9GFG6QDUzGwFBDv4wrNdZ0e%2Fhge9%2BJ5hwXGMAJ9HbNkSDWjOg87zxYw4FlxlaM2OqPy9bbyvy3vCnJGYCI0NpDTCFLmm5zumbXARDpDTQ80IpeIAU9BvzV4i9zJO4Y%2B0iks%2BANOIE%2B%2FT4OVTipNysbwor8p1%2BPyhwlKSlFvN874UIX8rcvAWiUjUFcfWhlnjtXDjXICMzeSr9k3jCkN2a0m8AfsYLgf7NP5AZVglT9tOG01syDaB10NZM7VS18PLUA%2FLt5Y5COdFfxbtn6%2Bm7QR%2B3iERQY4ODojs%2FLItu6Ja%2FBdYQKZw0AG9Sk9t6GXqOrFOJKjlA1sHDTXQZSDWxTDR5rPABjqkAVpZwxNHldxPS51scd2g8NeXtXJigxp3TJiSJppz%2B1HlX%2BqW1L0qE8H7H04LY0Sz3YffqljBuX4sA3%2FdFnEM89vYAb47p93p3n4eKRBBu%2BYx8o7U59ZFC7Q73tbvpi%2FEh%2BWCyo%2BoAf0XKmhI5DfA8MG8f9VOuga0TW44uF1jytqWary%2FAJy%2BYQx8jPxikuvG5VoJ69ao72ynEo9hV2oi9PFhuSnG&X-Amz-Signature=02c2e1c9b04124f8b261d4b2ca51f2cbcc156b9e5000cdd67ebafeb61f3bb6f4&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
