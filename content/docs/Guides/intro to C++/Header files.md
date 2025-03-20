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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIXMAM2D%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T170737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJGMEQCIDgc69Ha6RFqvx4tVubORX67bBACQv9u3I%2F7INXcKlFQAiBrz5LvMgiog6A%2F2lWbkIsts9qxjDJdiUlAzT5lC9WiUSqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMDZEIFtncX5V9o9tAKtwDEEUAuhZk1Bq4r6G18sPQadKV7b3EVKEMuO%2BAtf%2FxSKUbPqFFUXRpzxDHEyA5xVsASF0kk9QvlXR7ZNhWKMBoBeJ%2F5jgR1aYzlFMr1gWKQEDp%2FRm%2FJpezd9BWngTUAUe37LaSLd2EprRR0X1oD%2FBFWt8MiHZkBy5VYfHVPqNEZ%2F5V%2BjVZLTm5JBhUcfevYIyIXxOfA8LU230TQPAruvQoBROhOnSU7nDBmRg8fR%2B%2FmxD1NfMszkpNEYDh%2BMsz3ttqa1QrmI2hmXoKH%2B3UKx8d8pXXe36yNSEdxV9CjOP13sCEBY4r9lh5UKQlftGjJ3bHBjmyoBFMFk4EeCCGlkKx3WnG9ywbl1NsFCu7q1cLzuqiNEUEE1CPLZrpB%2Bpu4%2FpuxvZTQ07dxTocavLMgCDX32CUJC5%2F0YaiotgpoWtPeuvpMcdZVQn89MeWWyTeyNkzOXGA74xPM9ZgdjoDhqr00cYGtqH6Q%2Fi%2FETV6OWmqXD0Ufew%2FYoXhEgrKEL1vK8C5IbHRzd%2BUeDnNXlm%2BoghvaYTqpX%2FCxSmh5VFdFi7GHyyJ6PxTtbwqk%2BbMoVsp20Q%2BFkCJHAgT%2FQtcLFwxjXziIFxuQkXc96jm9zWY5SIx3eC4ZIV57rSEZGjce%2FEw5ITxvgY6pgGVqX%2FDYoFy4NiVhVTDkHghZHX3s6AoILIzxSUqgUHwxKjKdFucBCB%2F6tz5f2BrYDoNeqGUxgCdLMLQYmzMoWPU6pPazAM5x2wAK5pnl%2F710STjqOYXmeuHmz5NU%2BD9goK5TPu2UXp87jERBKVID9fHuFlB5dK5spb03yqVEzP8LKJU1iztN6aJ15zwZsdd4xDBiYPvqMGVl%2B4OINoVCYP3XHEnOF34&X-Amz-Signature=5320925ba8912a6d93411756c809095bd1c59ed298beba07ec5329e1db4fd871&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
