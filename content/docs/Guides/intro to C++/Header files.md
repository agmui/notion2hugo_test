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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666C2IEUMI%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T220128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQCh6wa%2BgcqMU0T66y7zDYFheMGqxUYVGVIr98154XcFLwIgZCHP2pUHdUqMS1eb6qox4NZFrWYZLikSeTYXnz5vbHgq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDOMv0sgg439Hl2OW6yrcA6aEa%2FdSi5HyNHOh5c50oyKv5ZMRJGgLcBbLM6DfbTBuLT5UJNAf54X%2FrVwIYgKVFMY3fXh7ETDKATSWa7iJNRayIv64St3Ity%2Fwo8zCmL1ro2EDIvx0%2FWb3j1cxKU%2BHnL6cF8ahl4dd%2FEyl5JAwkrlzoOnLSYs4a31%2Fw0VXwaTKHE6uF26D1KtHyp7WEE0HWgL7gKzdMsQU2z%2BFo4V0vl9lTIreSe9FER9W4I%2Ft3oa86CP6ZVyRa0caNbpT6GnmK8o4UvNqbBYQxfGWSBvoq1uSQlP0vN%2B8WkH751ph5XGLyXuvn5m3eG1NZLoNXQuDYclnT3DKFUoakK%2BgvfHGVlcX6wi33kZaZF9Xv7B2V9AXAdwVBkAKF8SBzviqiHJt%2BNccmyJHb4kDwg2m9bGlc4SJf4b%2BLvND9xEBReGGsRY3acKIlvvS2s3A1Alr8sUlWVe8XfEfmJeemJE4aI9kOeLl%2BkeeDNHyiEwtedOddQysDuQltx5Y7qqA0bhnJPKSPLyK78Surhf4Etc5U2G2aZnMaNtrO5KbzJYTFEUPqlwvmqjENnk%2Fq3YV8KXrVt%2BPHACirpodphdgxKkQt%2FFdIB7krK8BjltkoN59RVaGKoyjJwTX8uV9uah0pYgrMJDzsr4GOqUBZRBMBkzhJtaEuRzs56LAWOJ5adetn9tNFUOiNV9fnV8Z8Cu3brbmOR9xzSvuzBuLE7wtNpFj0A%2BuK2AF%2BbHJlyI4esnq6qGpyWjOx8zNBc8V3oSajAdncuCCXY4v5yl2DnhIXPAkWWNmfNhgAp1UuHGH4eMu%2FKYOUCNRlZmY556n4B8N0PzumE%2B0weT9r7sM40ZafutBFUXK%2B%2FQWqzOo5Y49pAPw&X-Amz-Signature=8d49afb885a8a73a163819140f24b9f6be6b8fec749260adb87e99a9b222789f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
