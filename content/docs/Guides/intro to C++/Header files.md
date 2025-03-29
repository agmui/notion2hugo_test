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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666BYJSSMV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T021553Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJIMEYCIQCcwa1Qj8UxuiNbvC3elqz9Ajijc2iX%2BDUHjlNwmWeoRAIhANUwjwtmETkbjBOKIyEW85obQZh6mJy%2F9xlRZa8JY9T8Kv8DCGgQABoMNjM3NDIzMTgzODA1IgyRJUBpu%2FurG%2B0DrC4q3AMVj%2BEysTeSNbHkMVbyaoDwRtwiFH46bSS95b7SkCTfm%2BLyMtyLD8a%2F%2F2p3iX6ub8fSZ2XAU1CjhZ2F0WR6m01DKctPaeagCYgQM9iKy3xznoN8vwK7amVmxydkU9A%2Bi9wyyhBYSmrD04LPuXm5cO4CEGawfh5RDBFjMQGRWW0BYG1DEti9br7MSdu7vkVKieI6WBFNFtNVANquP0yU8VcRjsiybCZ0wGa5tY%2BWqjYlLg3kHCSycX2ghJpvPJjCOEMOoWUAgaAN09leHrKUQvmXsv82R%2BwQ31cmwlxa9CxyUexFMGIx%2BTrbGx0Xdfyir2bqEj0RyASiqcooYqrIJjGhtbgeD4i0yWaU5iAyp22eFjlnkmT%2B4W2Inwd2fVkcbz4IJCZBiigwJ6Wu040ju077zmh2zFudceYxKiJLxMMoKVJ%2B217H7L3G8zKId3OVhFAaDKu25%2FDwfCZjftz6qZLsK6RJMkA69G0cPIG%2BYUOUja%2BtmBvLZSev27LTYulQSvwuUv8ew7DA%2F5YB9cp6exzgqRHnMO2kO6pBzg5uBdIZfdy1vPdPpeuSVVzvUamSLmZUz59FHX7O9PSPKDAzNAqjOCdnZnVhMogv49bdHacagkqwSakA4DGZnFkorTDx3py%2FBjqkAbfabffCHIrOZ0MIQ3Ws22QjCnl4q%2FhZ080oGMir%2BjI42WNavIVAtHAuZxTKN%2B5jvACIqwKZrOrXNKv6GMnDa06Zq3RWNjD%2BnI%2BtLKKh%2Fggea5ie%2Fkis0uC8AjXGMxOAySZqVEBiXCbk9at1k0pWcVfZW5dEqZPSXl4OT1ktjvgIGgPB8xqaVjXx3TKkRLU%2BzV5hMpoqNSxem5%2Bc4J8krMzurdzJ&X-Amz-Signature=c772a23e0414345499287008b86217b8a60a27068424451c5f63955cf9f0c3a8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
