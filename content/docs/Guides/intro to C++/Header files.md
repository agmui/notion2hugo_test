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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TTNO5HL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T181035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBujjYJaikv68cA3MRbcifZ5lINT0gYU%2BiJVwxFejngvAiB4vUjPAwVDNGUdhasRx3g4AF5eD6bI6uM1kZ%2By6o8UaCr%2FAwgyEAAaDDYzNzQyMzE4MzgwNSIMvPVzTv%2FpzPGMXy8ZKtwD%2FDl0KTdaPksleSgSKghjRYRKU78WdM1V6LXAJlO%2BCQjcRYd7uSuweTHHC%2F99HzBcI3PdjR%2FsVBrgVTi6LNyazTSO8%2F%2FLtSAHBwlOR438sbEWDZD5kkRjK5eWsuFdr9DSl1ZhMlNJxlY7OvkVG2xGIsQ3JHkZf4s4neu%2FgKWWbeLtOENmDv8TJ4sodM5quVzmBkVIiZWJ8U83xkkNzzuPa5KcXSSH4wayda4Hc%2FZU4nCOVEGg6t5ewrJcyVzlEMIIN9Agnpj%2Bz45YrOusaz1aebBwTz9yKIryjnY6ZwNdlgrQcKHxq2Jkwjy2IhvXFiDf5LCFB1o8hPcvgrT%2FOOx3Udfkg4AbLpWqTLJad0nXtO%2BaoMVIp0yyKylqTAPPfxi9ckbvsBWvK6J1KY%2FAJF9gce1JKNwKJHmeCet1REZHCD8w%2FJ676PE6pYsd1P%2Ba%2Fa%2BhvPsy32Zcy4hcKhITNyc1FGGFDPahPU4w9B5KeyJoptK35C8%2FejWDWfbgWMbhZ%2FGkXUiaoMX3diYfP%2Fp8XnqF7xoWjp0IDp6V%2FtSaTC%2FED5MSb8IObqHO5c5gbA%2BErlH7cznpnmDpz96PJLDPoNq9MgJ5RMuFOCenyFdW9lVAD1sjfHwy1dTJmUutXkAw%2Ba2nvgY6pgFzU5Dq4YRAcEBR5Hpzyvc%2BLbBHVYF3Nwwh74V%2FpBnT2%2Fn4SvS3TOcJp6s%2BfEkM3%2F2IpeT%2FDOgv7kas1vjWz%2FKg539MlHjvUST8yFuYnoS7BwLXqgI6HKGBLwxIplo76sTIZoQ3MqqKewMs1UdMekD%2BIFsGc%2FCD3cwpkbPRq4VdzrXzvHMdvXQ1%2FurVFgblxbN%2FxWhNTyq%2BXJg%2BgkZoFtlVfJDU%2FHwr&X-Amz-Signature=ec63f0cc1d60858ffb5ebf5c7b6bef83bdd8268f229eb33af9f0a60e0f0fdf43&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
