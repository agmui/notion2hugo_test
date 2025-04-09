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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPVGZHR%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T022025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIFpjQOqj5MoZmBWiGBAawOTuiVWl19aMtpcta69rBKzgAiEArA3aVJbXEGcTFK0HqpPYkteKkitjQcfqwAmRcLDGYSMqiAQIg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBYgZsWc7Oo%2BIsFyTSrcA5%2BFM6bFmJTUmcrLMgIa6ObhWRDrfmx3fsK7iZ%2BgIV7mKYvrm93yVA0%2BSv4T4wBd4mRfQF%2FDW%2BPzy6rpPz5aCAk6BX753DfXypw38z098K5%2BvC9g%2FzSAczhJDYFxpW1ec2V4JO6T0Ypwj%2B45y0URz8M09CPHOrf8Y56vO2zxnbIZwue3zjkc0yFFoBiKBfI3xUJaNiU32GPtTGXqhI2GvVde%2B2wcgNWmTKIQs8gK1UIEt7UdRMY5YwNM0tXEgqUtwl9QWUCKYkDW1iAk%2BFXUa6AYgsMDSBDOaRXNZZQciyobXrv2F9ruOt8rqSJDNxsMvDnyY5unZZpqgxbH%2F9gVC2JRvW9KnOIo4eJ3oUxVwmQbWsqZsr1%2BLWxBqRW3KvGMEcLiN9MxgGXHrxcbv%2FqjQXzyJPxj2r8rkXaxzyNS2XMB5oUv6833f11jNCDcmWVmhsW1Cshsn%2B705UulI%2By68RQkjmZPXMSNPbOk0eyP%2BFzPoWVyMav8GphnFmSaZAR1k%2FxIwy5Ij1iYtlgYhj1K2VJYFKyagJ2KyQGsPkbnOffuKcCAc0Oag8HfEMyT21zOTyjv1qAByzJmq8drpytmQXjqvoMP3u1uIefm%2BhgHm9aHH%2F27G2ZLtbmzbAU2MLyj178GOqUB2nMPF732g%2Bsf8mMOugq69bn9suo4Yo5bBtGJutt3%2BRcQF9afJWMc21sZXePjJuYUY%2FgxKt8LJyUoA6tdK%2BNMB2uMcr3feKAXHi4tY4rgiUD3AH56HnIKv3Lsw9CCrnZDAF2bPl5zJMMwKDML2F7DKDjGnBvEcpauQbhSGCzYgmBLwZEpjmt3%2FN4kmw2HYlUgGUIQkaHYkZRPFJewrpgaRVJYAcl%2B&X-Amz-Signature=0347653c2b0002ed8a8669acca1fec81531865ad7241bef6b50c92c51b94c080&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
