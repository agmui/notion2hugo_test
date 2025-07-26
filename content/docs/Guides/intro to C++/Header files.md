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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSW37YI7%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T042554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQCnpztR%2B7N4jT4mYHl9ZsXjnZ6e2n9V8iaA%2BdRYq85rawIhANJV%2FXK0kQSQmtmFipamjoIMUGAwZwUWB652b8vKMexaKv8DCFMQABoMNjM3NDIzMTgzODA1Igw2uR7dndaMP%2BTrd14q3ANXapqE0qHjBf7kk2LFd3n9q1IzIw2bSK82Y%2BTqdztGZsSDgmQmvRnj4cCdABo8iPt2axSgRNY9tmLzsK7VHoanQZMm7WxtxNaqpQsNrNoTegHaCeJw3mCOMrc9j1SrF0eL2mYJ%2F0CEK948urayTw7yK1sSQeO%2BsO7UhUsVHYVIljO9wxEErd%2FesxJDl1OrcLqMWwb6NW5CgnCYLO8ljnWUeVx5zwb9aSW3U%2BbTESd%2Fl0cAeMJY%2F%2F6nWplalPXPI6jkMxP03lroK2Rk2mRGJ9%2Ftg8961cMdoNG21qSy8JE5jEH0FP5Us%2Fx%2BLZhr4FjtLRT0GBWJfwh%2BkX2gDxGT4psNVWcj%2BoibZwLmfzk866ItUy3jE2KNMCQ%2FuBqvGHHuGqVU2cm4PxD1VxBhHKpFs7KCaDPHAjdKWHxUFR%2FyMmWlF%2F912s7e4TZaDJUWecLurqJjvJo836USZWY%2FB21eEv1qpr6WfcHVDv6kcJ944nnd9OOVVcQbu7GDywENjRD4NOHUk0yrDBQArkSMTQ%2BSb3qFEv3CxLOh%2FPzn9XF5u5gBbYnWRNwm36eo3eh1x4PkL7SAAAslUsakIRdFaG4eYZow0lnXhcaBZjtkWHcNhZtJYfnewDccMCY5GlbSJzC48ZDEBjqkAd8wf5vS9RLBX8VDKxREndYz5ZRmOKwPDaYhHrsLjf3YalPLeFfiZbo9KESf2%2BelxDlmlS1IQ%2BAqExKt5tSI%2FK%2FNr5Ko%2BoG%2Fs7wkLAQ9kagcYY2qhx5TYTqwb%2BSraJCeE26LtBy1sfPH1RE9PTeyTxAVp7tINUYI1GR6Indl6Tunt%2Fg%2B1r6B85kVofdnY0uknvyjUWKXH%2BJQkTe705feIQZj6VhC&X-Amz-Signature=30fed37eef9ec49594f4c7db8a2d5ed76096ae89e9362a0a760fc3e733a58fd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
