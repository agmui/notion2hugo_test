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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676BGJCX7%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T230807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCICm4cMzNtvVHQ0l%2FmH8QUivMHYEaVVtP9QWn%2BzcyWvF%2BAiEAvhAtHTiwHMeixqI9GtlqA6LxO0%2BGsN%2F34WPvai2T2LwqiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKBH69HN8DgNF8ZXAyrcA1EocpChzq6ykln2YlUzDOxPy%2B2tND3%2BKi96TGX%2BjpvYJJ09Ml2n2ri%2BtR2vNug1HLgRdCLKn%2B5kqP9P19KqllHEPdMeTQZk%2BoTIN6AxBQGXlxJdSwudvVST%2BNLwpvNjyuE7aPLEyBGweUIu5U17tMjipcLxSIehCzP5PTMti9OZMXpJSn9Uu%2BBnUQ9MYMI24bLuOTrh%2BTd9XpXG72n8281jD4j37HbhHjyYVtqQBQQ68Vc39icH7PWMUsWdnowxNeHO57nxna9ESTOGum40ttgsWUEjMRrhKZaDTHj03uQnRx2ZW5sTq5IqJoQ9lrBIsOtj1LgXeewD3LhfSYDKdo3lcxXnco4jqtd0%2BiyZnFBsdcntqdHqUic51MRrJbJK5ektPmnbS5DK5kReYWg29OYB7frWAVK1B1A%2FzaaMa0%2BN8Iqlf3R6fm1GO2YjzvOzBZo1cSzXx49FQxBcdi4Pz7A7zDO96XCSvhpeFb6IVvbRF4qHX9La1E9jMXTd9lShxqpWKsE3oMXO3JtChX%2FuFcL2gHfB90xmzsmHbw3Yav6fw7y5mCTwfWHLFL2kU%2BfhklNCKPg2wy%2F4ODbpwuXuD61UjSbkjiES49SOJ9YDfs%2FPqUjjhC83hw%2FB4vGfMK2n88EGOqUBXdWxtcm4hB8G%2BJSK2YEP%2F%2F4Xmtp8oMROrk5I8%2BsHOdfEsMczBoPbeO2nsmBGiLabaj1tGZ2PcFqamRJ9a35O86%2BA3GlO0eUq6sZ0fWzU2wPSeZ6pF6y50T8p%2BBYtwGQm1SIswa8%2FLpmM24oW%2B0FfPW09jeXawfFHVT7f7ACmguIiKMMYSv4OO993sx%2BoJ4FutsNcjRg0UstFz7f93xoGuUgPh9Ej&X-Amz-Signature=3303fff6711439b3b8dab43063a928d1e91225c2bc93eb78fbc7909d369ac057&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
