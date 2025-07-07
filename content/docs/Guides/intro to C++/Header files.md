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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJQHFI6X%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T004711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIQDksSdXkeVHJcS%2F%2FVEfBs3F9I5JeZ5jmLPiTOKFPywJ2wIgeJqW4PpBnbwOvJJqg6sB6T8vJdeWww%2FVPps9eWtValEq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDBdkYwgHiEU74eATiCrcA4bqawRblzHLOqBtvhvHuAiDMRhmJhHxLTl7XsD9yUMT%2BWnWtWKFcXh4DX05MNNhLS1Fcm6x2azKrc1ehXVJDd6pyQfCGXpwSF5f%2BvDPPCmC%2BocUQHMjachvdS9IHOw5LNRU%2F3mjmLhSbxeraCuUTscDLv9hAaCVjjSWDtSuCZJ%2Fs28pxeOEwSyDz4lJGSbbX5voamXahRrrvMW9Di%2BCIi1AQUIwMu1hdbeiPNNZwZPWCsABGt8D0M%2FvA4dEe%2FeaaueKEle2PI%2BCQhmqrX1EsVQ5T6uigs%2F8Lg5Kf1ahZan%2F%2BLG8Z7cofo4jM4nFi27VQwqERFOCfO5dTWQFroAtbbyWqdZRecnI9Q1NFxWwf9%2Fi0eZ9IM01mh7RXfMHbP64zA1QCjjHtchtlWyf4rb5N1m1roGlqOr%2BXCamJyfOA3lTq8%2B5Q6ixMwEKTxlGOF%2Bl01FA3Y20lcnIgoikGUtb4gICJGIdT1ScTVemxwSs9%2BZ8OO8LZ%2FXqKyk%2FJO8P%2BQ1X6yeo8WpTAxSWRbH47wINzweJAvj3S%2Bb%2BbefZb7vYdy0uijme1EkbhqwAVkvpD7Z7PbrkoJMg229KDOYX1N0%2BPk%2BFOfR0KRgiDc8paZLdbj5teRcqpTGpK6s6jeW1MO6IrMMGOqUBlgXC7axPCvLh7noLKN%2BbReLUGOSjSZmNTFjg8xMbt0oYZFd1kmtfICoKMJ%2FlDGS8hcXxa%2FQr8dYp46lx0kQNmMKCBGKT2nHUHSbKFGyGsdXspopgfwUbcEsa2dJ%2F4oLbo2NgZKo4iW8XDi6yvjOOKdkcakOECKkwzP432%2B5KrYAY0i%2BCPD3htqwoDOzLsGq%2FZiIL0EVmpFPV38d5fORmEf3ptuz8&X-Amz-Signature=74a70e2ead767911435b26a3f047624773e201bd6dcb348c560ae415e8b4c423&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
