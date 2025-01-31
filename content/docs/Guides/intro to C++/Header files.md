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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZF545Y7R%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T160844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGdM7dWKEh7q07Xqe6QerDQA8bMCXgsmnbK%2FTx0xy4NzAiAZmv7kGyElbmYu2spD7LCqgNIMVsZq4nE7VMuar6XcOyqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCXkeIIkkae6muxamKtwDHDeKhD9DOaNMsBd2gRWEyupbMFDrlktAuthoIr%2F3I9v4V6XnJbFlhS5PtoD%2FNW5nO69pMGg5v5k%2FA1jPN49%2Fkv5tzcVZM8TQqlvoh%2F6MyjwOa%2FsucS3qZET5pqW1Gd1Hy4b6q5SzJzptGnB%2BSmyPCkN96tDGgz3AHS3JV9LKpjtlDqHg%2FQheb9Hsre%2FSffnSifF4lyfPsUNyMdg9yuW0A6EWYSREaH%2FVeRRRmbzEiuYlptBGLafFuiSRdM0CoV%2BqWajpRa%2B%2FXDQHtybi9aIgzJgQ6MGORKWWABAbey8LtrKaf1SZd%2FTxobeeEOzr%2BrpeIsUUvSTszI17rTCrC7Tnlkj7VzJOFMcKofxIP5c0hkxvVdc4ULMYVE1h%2FXdttrQeiifjFOuAC7beVokVjTSBMQ4A8OkrHp6B%2FB8DMbmGp%2F5bwOtq%2F%2BxOZhzUuc55q8tzSPNpugu7FM7sO71RN4k%2FhUUkcDWx0qiuTjDEqlz%2FJl4Kt9nE7WG7Xkv75KhI5YcxU7GmsRVdknxmeJ5nu1nP4%2BLFqnE3TvJO7wi3skhjE7%2FbwEAw2eQDym1VpfFYyK5zbR9KOe9rq8ooRczIV1fuu%2BN0lKmFwfLnO1TrM3LqVjaZaKOLjZG%2FrVu7ZWIw%2FcnzvAY6pgGD5oDQpAwsEQC%2BUI9nTeu3QLByqBKl5RgdevRUqPDxatkCnM%2BdKOzdyoJK7Nm5TEPjEH5ku%2B687ON4YjWPX6x9yt8IYgyFa7JxDIJxpHWHTSF5QTdrmv6Wluj%2BF%2Bfg8gpEIcBiTUrTbDhqMH4Fmkqs0wPGo8Db6D9wMqMLDWE1bifvs5hAtXA70Z2F%2B8M8eVTK6J96oX4Jb%2FH5nbXVUgFA%2FbAQVlq6&X-Amz-Signature=f2253fca91a6998020e57090119f4707e90d28f5ba00eb949979562ecbc39a88&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
