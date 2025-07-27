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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEX7U6FH%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJHMEUCIQDNWglNuSeJ%2Fi1PEIrgaMg2UHBCD7ewT2oh1wnNWD16nAIgKl5yM8GuYpGJ0Y9QpDGUeYixRhtQqnffdQ85rg6mN3Yq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDIrCpOQApnNoopHXaCrcA1E%2BZvcYT24lspq4eU4bttJ%2BKGk1EwVpjWK0YH3uaj%2FtgQXg5znRLYVuJcm7UwBDhs4QfvJwIFmqgF5rFTQY%2FbFZpEaT3LImrhDK8PIhLpkJZtDIvcV6NwlgOzsFBv0zcJnJAkuAhnFeatq9Rz2Z4HSVPonmydT4mwSIt22Z4XFSKdTbn4qjm18ws8K2UPvF%2BLwheaOFammKXjMuePTsWHYxeHgXTAW16nLKOi22%2F98fghSbOViWIIkSII7%2BhyNVqRAkKP7YbDOuVzQ2YHpAa4B2woeuvn%2FUm0c25lx%2FCgYr2pSvWwg1IToEykQIkvAP562%2BC5ixoIQ9HLdajiSkQtk0cPeRawyYxYYmj2FtAERJyptasRuewGlseND6YNoi25cD2qMvfhU5gSMDBXfcwd%2FItSEkkKH3NFGFOkQhDHckuAyeRX0fLy1J5rPevGuuZMSRYIv%2FCXSpZm80%2B1RYhh58XaQ1DR%2FCz14dOxrdyxq8Sa0VTfaLfa%2BzfVTZvks%2FA1JNtwhMskRxBbuyLYIFHdBrhPzQmlhD87HHpLIYIT%2BJLJKlJykIJfZgC%2BCke8Tsl5Ly0ROvgtYw2tZv0FwkK7VRq3YJ9EIQNryW3FxkR4wf78ZY%2FKlRMROKGiDfMI%2BBmcQGOqUBT%2F93ckB0cLKFiyiZDqdjO4xuWrYhzqbB8FxmEBBZFdwXMfriTXJjnYoAwG6oyf33jgyC%2Bqd2Pmgtv3%2BrHXtYi%2BdcQGJ96lNqqen8HYdrmjvftl0RkEG00oZyDAH2NBBPRSm3qkwmM4Y1WgqIoO%2BDlCHxhhSKMWA8vYrS6QqnlZNN8Rtf9bUFDIKWHXvL3IhRZ1UWzW1WctaElnIVtAit%2BEMsi86x&X-Amz-Signature=b2c8554e3aac70e7b22ec7acaee97bbab8386ff017aa711b082d8b1b0abfeeab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
