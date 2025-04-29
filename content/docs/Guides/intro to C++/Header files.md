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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OSWFLI5%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T150841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG4S%2Fs7CYOd9rE7WXICP9e4hmww0i9eJDpvsGIw%2B%2FQueAiEApq8%2FqbooFe634KX3cB2qCziD8RI4gbp0XtMjEAjBYWgqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDItu1ZEYFnlAvyPPKSrcA8ieTAShf6wSpmF7aMUYl4jWa7x3N5jq%2Bn4jMbhWrf5Usfu54Ta3R3XuNQTb4Jbs8cRRi%2BXiKVFt6r%2FGXu1Mr%2BQgTJDMOMegPaJEi7h7T1ogH5LL%2BmAve9Z32KiD2JarTz%2BGUDjE0cg5rOIiQICSdDzcRUHxgbh%2B7HUnYmavEYLgEQg56QeQS%2BQSu3Yw02VCLn3bMV8MwRpxQ5bgfPSJTt2WUmr0fOuZlpiCeLlwc%2Bst69rHMkbOgeRtHcTtqr255YOlD4A6bobkbqE2nDClT9HqkjiDeWCCfOuOnwSffSWgoR78DL9wBhu11Cs8Ky6Zu9t%2BdvFQE9JME78W7W94KjIQINMWyc0WitFM6lH0ejm36DAOIQqUsrLHOkyHSZzQtXSSeko7oTHrur8b4iZgCqYyqQil03DT9x0FqJYNnnrba91kYKYFCg3BCvzX1zD8ATMztGsgFzamROOhcFQcpP13A8oJsY2QjSeJ3LJbHmR5zwcNK0kLGynZ6iJdwu4rZbQ3Ka14Jf58%2FpMTna0mIiug4lDhYjJzF%2FedrY1e71OczgCC4B1qS2baa3xb%2FxywtvrntfkO4CRBZi8gMdp8TLaGUzo6UvBpJBkH35ZfJJGrgu1yVfThIKL%2BlMF9MI3Aw8AGOqUBBli9tQqRAnsPsnnZg36drXTJwO%2F8Fu8p%2Fra2unhLSM%2FbPX2HqWkxGb6AxHAuWewFnrSqtFFFOXxsDr1uB%2FU4NmWd0GznHPVGQFMBIvwfVhKU2ywcX4iPCeGyUbmmfmsmbM8gXqh7qp9XopZEx0mJwWfTTtcFvY7D8G7AnsmvmE6dq%2BV9xH%2F6A6PIc7d4YZvfSuk5tbpZupCooaleNtb5zJ1n7N0P&X-Amz-Signature=03b3145b465aed18f016b5e2b3de78571f61d8c49ed64f4f11401017eaaae214&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
