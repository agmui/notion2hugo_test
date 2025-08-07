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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBIDIS2S%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T181404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIQCkAZA%2Bo1W44r0KT4YA6x93%2B8PW0jII7bkAq7%2FTWm3ZzwIgS1BbwlSOjL4Ugj3VrmCQ4fSWRw0uiz%2FAzvEUC%2FXklToqiAQIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE3JtaCVf6kp9vz9iircA%2FF76fjHBYHTszuRuwwPI5GpGAmvRGOxP8O7XIN18PAvjVyqkJsyxMCG9SMWf9IVtZh3ta%2Bkav%2BDyAsyEbNrbrLqMwDcZHhM%2F9x%2Fh5oY5j%2F5d%2BX9w7sa5VArnDC2z1gDXcJyHR3QvLHTiYgDpZziWeLwwbN2X%2B6YEGm6BScimYN3nu6cYHggTaC%2BXTKzKQ8dSLBanlqnBYxRazvCJdqk3m8wZwCvnMlj%2Bdivwaq40GLRTMKY9wnB3jNd58KIKBkBSKmwHsohdPCoCxTkKeY%2Fza%2Bm%2FKXtxJlMCMdaIh4NFF5v0pqX833kUEW8YkkPuARXIzYdKAi3X0Zkgn9rsmdCTotFenH5CdKs%2BNZ9mWcasj%2FBr3ayBKD%2B1w8REATN4Z3ZFg%2BPlbQzkLNwdFnrrXPgnnN4yBnZYDsl44akxt%2BEGCNCN2amX%2F0oLfR8WIVjkbwNLP4uLc5nkHx0wGUZuAM8I7KmNtxL7sos7JMBTscYV8gu6tZn%2FGNC%2ByZot7%2BzlHSQsCCPuBckzSiz%2FnyEJQ0VL8WZKxRrALRqSYKK80Npj2Woqp5W3FpkCDFPNTS0jBEi7VrHWzlKmw8KDoo90KuU3J1GJzhkpAnjMdDUNk8uzxA5dsOhu1F5DqpA3Y%2BiMLrK08QGOqUB1z5CwSw%2FA5guBymokJNW1f%2F%2F9T9uGxV2AQ9CrsMDkL2jQ156gAH4hJ5M3anG2z8eW2H2OAAGyL8ZgGMwzyhHKFxDX12lVBZsBFurpVzaiCrLTi92UGypDum3zAqLUdNwnKeygXqW1fmMw9WKRWAf5XlGa0%2BbB3dSOi7NZySXZisyw4rdL2eYBN6BI5pfygHsvGINkxJ%2FoFUm2i0GHOJBQlQRG2DR&X-Amz-Signature=95e419ee1ddb77dba70c034bf5fbea42ddf1b1bf42c62817aff6213a2515e7f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
