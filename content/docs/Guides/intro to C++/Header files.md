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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDSZL2ZI%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T071200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGF9X7ba3hSs2CX%2BIqwYdQFbHWFFRs1cHWof5n4mUbgYAiEAyXedRbxCeAvV4gyUnqa718mBnn3evJtCJnLCGZW%2FORQq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDMGdfW6MSsWGy1pgbyrcAx7TKpu7WK%2FAvlcC8vXnkwoQN0Dl9Ywp33qDWWnST%2BKFl1TmQvyGHmMUbyFGP%2BkUx0J5qhBNIqa7mp%2BzeUqBDu2Ge8bjIj1N9h%2BKZhjB0jvsqf26%2FKxK64QGCjAXvkB7MHW2vFZxLQHiOdJn%2FSrtt2YEcxHBY5KAvAd7J02hf7oamwFy6v%2By2dlz30PNa%2BKWB61izzPncHSF6BP%2B8tf8fRynRRZoXJbk0fKCYbNxMd9t0nKdRBz2p5xt5gIuqEVOk9yaKFk03sm8edtaFF1a%2FxMhvw1lsIZLEyqgCYuZLsOjQnem51suCiQ%2F6w8BJi3yxSd7I0z4wCfK48moPbvM2PQehaa3UJCrZmwRNsBC%2B7qAkf4KBkv7SZV9UhfCWaGIIeeJXzNiIvxcwotgfWANKWLHlviuY4vdRgWiBTxAnFzaQodhxdXTsVaXT1XCBEdfppMJayQoqTw%2BF29ViHkemcUxAnoOsUVllOgLkbbRJZVs14vpM9rGmXYjfCRAJWSSlC0FnRgqqFf6%2BzzGI8ZdYzsPwHzb3ZWDkGOq1rRd7fKR1lKVgeHUSqVL%2FtO2DL9YsndDXBAG8cZkcJT6xDJ18fxw8BmK5Df3kj%2BZjnPjq6TdX6xFcwy6GLprokdKMJyJ9sQGOqUBKj0w9elvptnafRgQ2qFFLTKmdyN36mmQdS8GBNc4mrqTpumH83sV8yKV01kwSTXPGBPJJtIw5NJiXP1Y7t1eZu8sPWpWppzsdkV5EAQMhsGTK59fat64lLlAMwmvQps944JG5udtBOy0UDbYq6Xot0KFqmqGurzL2AgGl9eMDtcWeT2DXzjhhVqO%2BvKNrlg9bYvoV%2BSFtcy7MeS9mM%2BhAoHvV1UK&X-Amz-Signature=bed9d8e9f656b230dc70d06af456e393cf0d38e7d8d073fd8e80fd450bf9dd40&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
