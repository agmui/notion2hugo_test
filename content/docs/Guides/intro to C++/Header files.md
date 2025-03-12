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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XNI7PT4%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T220728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQDpW3eDqZOB73%2Fx4MwNEXPmz7mzvFzKgIdSpSjznvy3KAIhAM0fapPJF3I8svhDW002MNbTyXgjGVuZB5Woj%2BBPpiPHKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BTD8OFT7B4JTogXEq3AMzjZBkCYSYZpAUzs02p15sonsP9Kli0kkJu62h9NwM2g9bCqUug9bBHnfOmkXGNhM309jqA8Oz648qaMU%2FmzwnoxCVM9Mo2vjQiGZ4sr1bdAD9z727JTLQK2u2PIz8StMb%2B6VdAHkQSmQD2%2Bm%2BtrYtoeVNY7pS4Ue48M5pvXPdrV2r1tNnAJAI3AVFG13Uoj2FPXbEJ9JWiFjFkOHv9zDl86dgNT15mzaRiRfaR%2F2GOaoRKK1G3KpOt3CVOSxYUkpxKrdoMrzLAG%2FnXz76eSZcgnTSxVEUifOZ2lGcEYHGtpLQFHxM5o4IQXciwMMG5NKTPmFJx7CTYVloF8VsV4b5IubmFmKl9wNFWT4sYMvNyjqOhPeKRsun1AJJIFxxINLLNODo1ECDJXxY8B1mlaRw%2FJhkprLs%2BdVDPvdFRd0%2BZ6ztFtUWWmyxa%2FlxAwcsOBbvQj9rH8SjSo%2B1KhJTfT8BpNk9ZaEJoby1tJH0p9037%2FO6sp7e6eQEwdsqBUi41n9Li816sGgqzqGQ2cTqmsludKZe2sKMHqq8wenAUJH%2Fcy%2FHyx6kkw2Js0NPNgVatIFfVuEiccdaYzPn3I5b8b%2FtvMvtbyYa48y7SYh8OW59HYnydk7ZjFtLe4nbVTDOhMi%2BBjqkAQEQshDS1R5zTKYEZGgOCVb0oZeoH7I1edeP8BlSNnXkEQ73iOSN%2FzJKXppf1MMpLc6TtRLoj6YDTz9foePpi3k5jlQv9y7DQbJ%2FS9ZhTVXx2PZefD529eRZkkRK1oLqU20bUWL3k5Wj%2Bids0hPuhnTbTZHpsFyOwpeY7ouH%2FLgJ7AWYFVq83vyFEKuenOMthPSI5UIpkdP7KbaQekVwe0jQe5%2Fj&X-Amz-Signature=f5c7d923a8837e45756a8cf3ae43112dce991441e65801aa90ba803d8769aed8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
