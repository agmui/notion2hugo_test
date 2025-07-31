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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XY5RINNJ%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101019Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtsHct8T0TlMq0BAP7IeIFA5N4Uos6jwo6tAQI5hD4qgIhAIsI6iSdPlBM8xvAqw5b00qhf9aKSl6SRGSMRoAgvqSQKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQoYIi6BcMW9He%2B74q3ANaSmi7uZwkDn4DppC%2B3LncJCxfw3dIG439IcVaBFZgaf%2FGYbt%2BoaiSCy92qiBg9jgPS86IQHMiJ%2FzG1kvFRN2VgQfczcWvqF5edQuizfO7i0jiDD2glTzN6T3je6fbtUfVqYOYAbSVJIwfXhhollYGYrMdfUkReZzCOxHCmceOHODCe4%2FfL3XjY%2FFWZOPu7%2BPZe0JAI3t6KnYk7YXN38%2B219TYaRWOFSjEpAJ0mnOJCwpWLlbatHklvifkhe%2FJtxI5nUxWhqV75f6YaX4nZ1sIgxQBLJNapjULEFAuZNFdszLdDAXGhh%2F3MpR62WHRqXtFaTkbaDqHTVYc8m4KhTOqxldyMvCWhUamqLKDp3yGlbdvmQJC91zpbSK5jw6LH1BQh%2BMQVBKe9fiN5iz9LDkJjBHciXXvMUQWnTdWsfCrV83oP37EtdYG28oxtz6b9mf7UhfNbI0FZV0FacKcvXkBxOCmaRQ9MXUsUc4f4vHL3rdKCf54yJu8Tw9POjMqKSaamDDHDsVoHjuARYQG2G0R%2F%2FBPXI40Wn1NCRA7BBXmwJunAnT5rexeqoFdCTYe%2F60FCxCDWpxVDQ8wIv4XUACusTBHAWuTz5D6agONdNzBbG3tY%2BM9NhJP1iLRRDCPm6zEBjqkAbcDzQ26CuAN%2Bvs0KGrmD40UMOTVZwriy4GD4QHyAFdddKrDQ3BNzHt6%2BZmhzPx77MRojN2w65DLa7ppCBAaB2ZplXYWXVPf5kN1wsy7hebt9nT3mPf5VUvLoQm1fZNnNmMnFeWHGc%2B7OQDVtbzQ9ezA59iUjfe7LChk9Gn4PWhdSGylUKn46HLRfWW4I46xCxA2vDu5uwWi%2FWxwovLy%2FwHk0336&X-Amz-Signature=b0c383dbf09c2deb8a4b6f1d707a9d89cd9ebcf08d3fdc344266ae94005e4f33&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
