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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UPXZRE%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T024128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCxibWH7v6Hn9MUGCrG5A84uROPRTmDe6qDMyhGiLagJgIhAOgQTIu8frMnioK4CqwUt4PwUVNxuK6UcmYCT1u0EQk2Kv8DCDoQABoMNjM3NDIzMTgzODA1Igykvp9hTQD%2FKg06twkq3AO%2FPlsAeNFTc9hdTjz5OkvuVDKTEcU2WH6udy4y1qf6fPrigew1Bv6cWUVULC1tN5V4O9GwWXU%2FFLeCeLTxA%2BQpE%2BzXyTfM85uzjejFRNXx%2B5VdWGX4qpUQQlqzhVFrsV%2F2%2BTFFa9h5fVmeqPjxsYvCGwVUEO35qga66JPmH8tZeiF6%2B8c%2Bft4odfkgRa%2BfRQFv2O6OTtQWxImMrX4DorgZQ49sXFv7ssTBHR%2B%2BaHsipkNBTRs%2FBPAGH%2F2JdeAlRbpDDN2bG07UhVWiHT%2FDw2VJdxsDGAaEd%2FKwpjLKaJU2oj9Ys599F79hz3RN2bCOTb%2BjU6zXiwVfQhrwHafBHR1xYifl26cAWFzIH8jTDOM5Q0aYHS5ubH3aUgn9oSGEmRbmonNb4j8ZND%2FeexOippSwe7SJjpRv5pyPTv1JEhYc3pRFeR16M7vk%2BzBJOk583PmTN7MtwROHA%2F5AC1BOXQYpyKyrJRnCUnpQBCQrNUMqUY1F7EXhA03MM3jX1ZfSazkkLkiiDcrb7jNIeB%2Fb8kefwEcJ7rMrBp4VBXQ7JHj%2FH5hHowfQGwvKr1TSKZue%2FJZU2cUuXo%2F28vYgeuiDzcRs3CDgPSFvg4tG%2B6iXcjuPRCla4EO1vBNIPlE2wjDflu3CBjqkAR7yYeuQ%2FEpQ81gYSx%2BIMiav2KJDsRpyPVcDcIgnrKgt5nXTMeo4rbvx%2FBVwD4v5ZPNjPuTmiHwvL9hPZbFZj1VB8EdNXnu1kxhINUcPmL%2FJ5Fe9qpq1NcNmkBTPbWYuiudDsOANMAh2Nzn4ioSZb2MVtP11tiowLNG9JL7K4jh6kVwCka%2B9QpUmwgk1AkzS1gQHaJ0a3irTuxNnAkws2A%2B1Dpqg&X-Amz-Signature=b21c49e244520464f435c32f92f6663c67359479210e5839f7550f15016af3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
