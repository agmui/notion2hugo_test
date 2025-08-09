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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3H4AUBH%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T070854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJIMEYCIQCxC6yC%2BgeWGIQHL%2B77aRznHeFvAcrkapY52HqYRTeMCwIhAK8ziBOY7MR8gETBHSUXd9no2A9pWN2gDPrlR%2Fr%2F5HgcKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJB4YIJ6XwxJbgnWkq3AOfuZ2LWTyflc2kXgUVTr7qC%2FfSY3bvC95HAKqEF1VOhGLEIEVI8XwtoOb1q6db6Ym%2FeHrSC2I8ajQauc9vi4YVCM9nI%2FSjBBnXSXdAp2naXf%2FdGDKEH4SJ8obTSIwN4h9nQC67sNT2pGzaF6GzdWDyFkLsfVZrxpVbi2ya8Ey7vknzQFwCqubf8oxmR%2FBAttKnBb4ojXA%2FgVd8TCh93Pw26%2FCwFFQoJKOSab7Q7IaXdBxYfOi8ZOcddB3%2F0sEsvwo1sXWWYEmesn4wXQ0%2BEW7wQcrmwdCR9v2%2BBgG1F28S%2F62HeVsFoOeqlwxWcTKZjlHAcH4f%2BZb95%2FhYPby8IYVSLYGhbe1ZN8krqM%2ByPN13jLPBpx7izoHZ%2Fzm5crBnhpiir5%2BPel%2FCJgws8cETYKSmQloKW1%2FJnTLUCDJ%2BpirgG1%2BNNw%2BbRrpNUEIhkx9WF3yezwEml%2Ba6xMJU3191unhf6QZQ9pREvMIKmeCnJHYObBpwJ3TkU%2F48mKTSQ5OVivbs0Ljg71itZMZVuhlLo2s7IO62gf9gMjEgoT7VkrlfSK8r7C2bOtgP%2FI7kTxP2wzu03f9tBgPC1G5SbfuaBakbSaDoefAi0OpSVhibR7L%2FJQvvVZl3tZz%2FavxaXDDKxNvEBjqkAXV9B90qsvcGrf1KyV91GJYKG8yy9S2lyJvEBeJ1a87kQfeLbugBtcs7vMTXc7IQQGLB3Qf%2ByCPQQa87ZvatCchPC2LwSwO7aGq4BejT3cbkFjP%2FkCkRMwktDGG1dVZpCdKtcux7xm7g1Mi8GMhwAtjA1KT8LdYDeKUqMLEWyBcW7sknoC65uh8VlCJ9%2BxkCluZkjbM08Th1PbSEa5zs82MSrGuT&X-Amz-Signature=34009bd4fe82a77ecd257d44618f64a0564fc647a52b57fac236a20041d19825&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
