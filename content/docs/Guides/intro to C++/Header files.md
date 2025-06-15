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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6AV6LCF%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T100809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDKZrsWFLkJ6I3pDj9jzGp20SRp46iMroJyArB65khKjgIgR2NIbiGIn2Ie2T9LbXiTzlldr%2FXZj4vJsS0aQ5myNDcq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDEQQscDwyoyuIdXN%2FyrcA9HV5g8EpdDzbDieDxo3CLk62AVkxAb%2Bi%2BWzQN6PzhlxxOLZ7Q5hij%2FPvch75aimHKKdmGTQNUMlvOo6BbAhmuPQOIGqG%2BtLzJR%2B%2F%2FEt%2FPdNFK3E75QLaZUT3C3w3Q9SesdZlMJFp8ZqMOSjvuNMZDIyrTJqpxoXzYAIgNaM5wtLbUM8kS3RezscdRq0stu979lmJ7QLDnRh7RKX2BJTAx4FV%2Fm5HZedEVtOBEAm4PRjfAxmsUSFCd2JnYCP5RJKGJVWOa6WKhF5bXtFpTPZHWOz%2BcTxmdd5U3dFQWkt5G3mIEHzKfJRBwbdbzaiehLxJGTmx%2FNete6KLWErGQqy451akACb8S7LgIZFyzNyqK%2Bd0d8WBPJMV6L7rb8AY%2B%2B63mGiKTAwlkiLQZ1xNP3T7qtbrMr26JVV4%2B%2FL8QZC%2BfyTMI4ndsFOHQdDkLSllRw8LIXwS6QLoTJX64gMkWWvdwm7q7p%2BrK%2F3pnSvpwk4hQczMCDIEjCHCc8vXV3c8mPStj12ti9YrE%2B30rJdDNYab8wCOG5v1vjhTgtWzUXvX6gMAxdkKqi4FU7QSp23c6Y4hPZ%2B%2BqaQl0iQ0e%2BPs46hvkrVhKixU3dVtFc74isgVqPTnIcf5kwd7nt50urSMMCEusIGOqUBVmdQ%2FAXGiJvSDHzHMX6YpSyf4HpeZ3QB3y3B%2FKUj6XPHaUv%2FeXyd4jWGDEbpuLxSb1DRWZRnhFpCEUzecyT5hTqna9CT7%2BtNjH4j40dLkefP1FN%2FaP5wRuuYBX1XS0CutgXZlvX7t8T95IMJgpmzXcltL6K2QGAV%2F7TOn7Bvpe%2FP42W0UY03F%2Bk9heaJJzonYTzvTQWiqrA3vnQmUYbLmaSWy48D&X-Amz-Signature=3687c01dd06d5d341f287afa44a904eb1e1a2f5e9f0829ac47001478500d6246&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
