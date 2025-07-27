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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667J223KZ3%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T081131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIFh%2BmpOxVwnlf0nPcpVM%2BJoRS9TMLpeqeTU0nKqhJ%2FDsAiEAr8NapwUjRH9DWvTU7Q66BF8hBEyAFCMoZbM0ydkW%2FCEq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHjEbcxloSr5JDfyTSrcA2Md3BpgXyzizTQdiU9yagQeF90vdUbV8jvGuyQA8BunE8Xvyyq8WOZDKamTT26EU%2F4zakL2WSuoMA6CwBvfDTEJuCjEdqg%2Btt%2FStMHIgVkGwato%2FigR521ZHxR1bsVzonIZo2Pkl288Q8uP1jeCcO9zdi3J6DQmxzm733OY6i6SOAHrPgkXo1GBKb2KqVaHKgtm7guPONGTT03JXR%2F4JHWSrzSGnbR6IgdVTmHtRftcXzXPenKkvbmUR2QUh96TW3d%2F1YVvV53ggboCn9eVNWDPPFXsU5egFVx6hhcsBPKYwHg2pW%2Bqq6%2B%2B0cY1bOBK24jCodSZXZJhGvZ3mFMnhD4cqWd%2BYMftNOOsXV5MjN%2BituSHcMbv%2FC95Ogv2JAebQuhlFQlXvwvrlNJF9J%2Fyw7sxmczGEvCsENPmtVUqHERYBjRU1wpLMk8J17tg4%2FhMjb5NoO8jVgU2GCdv8ccC91Em6opvH85MAm6Ji6Yef%2B9rEQMNHRLqkDoCJJk1lUCxAZGlllNY3vc0HFyPU3CHn7LgzWpUuey807RKe1c0qM3fOqzzZ%2BnU53RDBMub0Rvv152WXXr6IvNtmPtqQJuWV9n%2BUjHxdA6o7gRMhrlsQAxqAZVx2tURYG0R%2FXgpMKq7lsQGOqUBjjSVBJRFDVmXdpajyCndKwfuwV8mqB9x6ADU4R7kL1WNurTUPNWbDZESFJFJF0ZnCNqqeG5ubGZzOO2ACMz398PNvy7yuD113xRU5JcKF7%2BwKkFaHemwI8EGQpEt0dslwI1MSy3QkElCLpR%2F4IUFP0VbJHzB79Uz9poDVSMrRGypefHe2YYTsr8SZQ1wt849ZgXNKF2OHE9N6cROen8SgnfePrs8&X-Amz-Signature=36325bacc1ecd967d95734608258bb21d8da69573be9975b9ef203842dfd94a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
