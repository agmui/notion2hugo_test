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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWZMJTFF%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T140738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC9%2Bpdb3d7TvuvoOJO7sUX7ulgY7tWsD9gOuR%2BgW7psAIgI7fZgfuGyUbrp%2FbRx4BmkoU8EfYw0av4QHuuSPrWMbUqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBoF5ZjFPcEGHyeeircAz42CPugFrXsm9xGwAWyQmTz0C0h3x1l%2F6AP8i9q2NAzhGBE8SRLzBK%2B%2BhC9Qj4YzXiUosfRR%2F8yVDtROk11L6eHVUw4hxCZrvdMjUyx9dgM7ZgDwmp469avH54QJbodrjTDsu0RmvX3GKkSXhm7cMs7S42mec4EhM9oq2BUHn%2BNxKsFgGliYON5i%2BeD5LzztxJMWlDsNurRc9ws6%2BILR14nSH2Xx5e5Swn1qJX0kdEXV7Td%2BJ5t6fqkKHHb%2Bh74NHxpTWDZjJZQoZXvfbGCtHkhPgiS%2B%2B5OXKDFw8DXnCAgQZSPJP04w1BhmfqZM6eND%2BTjR56JdqtiuHG5fYJhsesG7A%2Be63w3wx4IA%2F6w1%2F0XmyLzQBL0guCzP62DCQZcTRs70EMzwulHdk5MTXqTgXbN5MzARWgIX1pBQiHFdQHQboQtBF6lIG7mmOBrhuqs6rczfR82QO7uyaj1IFk5gCWJ2wS%2FeZcUwe%2BkETQVn%2BSibd2uts0NPp9dd7OZodXs3xFostsxVaRpj%2FRyPjEco51a6RdyH2OQl6nL6yYqmeHZYNLKq3XCvfuK9fl6239MmuFSEbd8QPXTa0rpawSJ%2BDAY69nCLxrxjUez8x%2FBDnDSwX4Uj3EIfW%2BgDEytMJu%2F4sQGOqUBdfm4cub9EL9aM9lUH4A1CBmwlvw3fsnDfcw%2BOJEfINdO8cruAWvcYRxYy7btKJd%2BjaPR4qqqM1nWT6HCpeZBrlBBFW4T1QMcu0fqF6xKr5waUO0Lp6BNUtq0cCywvI1IJ5%2BfSKKgBbGlAPRVeaaqqJd9KPoaQxVoa1JvqfMBzCDWj70klDi05jNTQH5AMt6MnEcvPOjpIgIFhaM5dVSqjdEYT%2Fq9&X-Amz-Signature=ce05e050cf6b7056ee014a186ee2a3e7fd0c30b640d179cd2fab8d8af3b751d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
