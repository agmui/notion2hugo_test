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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FDPIYFV%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T110728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIQCA1J3dvYnABSAnzO7ru2P4J7Elo0KHSvQLI23EeMQxpwIgcx67e0v9kNHN%2BJL%2BAVjRIQQMUMCydUYjk%2FhMSgssnZsq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDOsF8seFCGrpsHaBxCrcA6Hm5VnirJnML%2BU7aOEG0hTHZM0Q396nvwAmg2mYVvZMhGpLVqwK7%2BhzYHiERM5MOOBs002uSEJD6t77tUMAMak8tNg1EWkEZp5Nc3gxQBTA%2Bk5EIdMlowQ1ULAamq1bfAPbYRy297FZS2OL%2BjkMCMEFbI4X5L3zStTgTQG30hwLzm6paTnnw2NS0ZAFD9GG3VctZxNHdG6JrBfXp1CQOl5wyTqpe1BJpk5RA9%2BNeBYlg4SstG5o9q2fvYY8cY0Oh%2FHSpurPobLKZkdfy3qAkdIj26GmPG2%2BfzJmJMctNYmZKNiFGPFpwEbyODfQGapZPs9u2HmJGQCKuX74wbrtn5%2FbomTYQAAS6eKS8TFjk%2BwEjkhV5zXlyeXeqo5Bel7zljwrE4ebf8eb9Xlss0HvMFGCDnTCgSi87p%2FKlXDLaeBZfvFnZN3OTvZodptRQgiL2yrXQj0gmsYqMnR6RJVZVUK%2FwI9dAcIjG2CCgWI0ZcsDZcAV4BNiw7oW8bCsqvBMzh6bm1f8vqEcD5%2F4BZw175vxOkPT0KoBfccgf%2FWMqGw5Ft4V1bi5EcG1DxTi5ace4ynPC4q36IUodfQNCQXHD942JFzyX%2FXRmnn%2BwsLPf4rrGYPMvU5PyCXDLiddMJTtkcEGOqUB9PaMGKD3M0K7hKFvOy0RI%2BMK9KAoBjagJ5QEXwL7l%2FWAZnb8ylORVSAKJ7gSj%2BwX2cyMcph7QC8wq%2BpmLBIms63ETlj0vXgCS0J77v0WcMKqWbRVoNlC1ARPj7qyAgaWrboeeSj9o29mO%2FRgqLlj7taTFckjWf4yiKoEut6hOh%2Bcd7sardVV4Dg1Up1X2P4vtp2x0fP9%2BdWUoicLd%2FAJj0oclBpa&X-Amz-Signature=3d5576e4169b5ad758ee8288dc4ff4017c88652bd160fb3ec5340e67422aef7c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
