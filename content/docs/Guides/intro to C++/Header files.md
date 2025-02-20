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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUQ4TNYY%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T181021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDe1NNgO9vV0IzBW4aAwSaZTYxeSO4YME2%2BlGnx4gM0wQIgcdnfD5dk5%2BKu3%2Fn%2BRZveFRkLaGAipner5jJzzDBS2twqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGbcvzhfbW4LQ7RFzSrcAxqH5XMh5oeC6qQKM7kt4gJMjpX9FDz4IMhqOllZkvJNHB0DMe9zkLEylZtecc2z67zu9wJzYnDXNngfjgCROH9zx%2Bza5Dl0Z%2BIxF5y70JEGFpafSV6v2aKWyRzBThqjeQ8fRuzXsyJHLHAI5msrJ074rp6NAg%2BgKZcbV2rxEzVh1J8QDSlYmaJ%2Bp5%2BPesCtwA0eMC6Sqw3%2F9E%2B%2FBOI7Ynp2ES9W4UTY8rl4kicizWV%2Bc%2B%2FDyQObxmiDfvxizc40KPYJjCKrfFA3XOWaF5BF43oMsaTnkuEB6HLxYjLgD4VSSyIxFBS6n3cRI3h2M1S18%2Bz6d4nXNazn80pFxW2xwqeBDersZ0xMtWwEVc%2Fs5AMLYYdY7ezlq90uRNqZbGkysK6nDa9SMnVPsoA%2BgitV8i6XX7aFNw7fI%2B8RCiKcPByTplVmDRKoUh5Stdmq7SA5HYR1aLN59pu%2FP1m0es0Ma2LvVP1ocG9oY05HV%2FCKGH%2FPolb0PU677Y1jwbTlAMAMJ%2FX55ircxavxz4ZM7ZeLxRxL%2FAtB8ryQCG3FkbYPowAV%2F7OZ2KIRoTs65v9f%2BGJIpx8xKKdaQQKBJ5zvtrMVFaxuZVOzTjMOAbk12zOI1e3cSgDlhdIZ4UqLMQapMJbR3b0GOqUBsLFXgnao4fwFxtV6xWBTJ5P6Uw9QAoOFrL0BHi5h3cOjfJxIIZL3pM3yzFvjDhSEHY4iP3GR5Dq7elnpslxWz9LRQTkuvNAcAPVi1geDUKgdjp4iPvL1jckdXAaBT2iCy%2Bd0lDFkpPIVMYdFX49z4gK%2B1XSYHCOeyiOQk6th5mx%2Fi0rrHwW%2BwJaxGAM4s3tOYBnQQt3vmKUWsVqmQuTZu6S44k0k&X-Amz-Signature=756ef17c82390a44060aed92ddc7ab3e1efa2467786847dbdbcb8061e36aeb09&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
