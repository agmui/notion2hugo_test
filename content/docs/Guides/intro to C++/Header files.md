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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GNRKTHQ%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T081217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICGakbi7GGLNNHmhGuXP30ZRtWE9pVLiDBigPnSCFsV1AiEAgNFgubyKdT7MbCOBRpxO609vPkSjsRLJCXrZPASbhx4q%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDNS%2Bbjpxv77y1JDBIircAypBDgyrtAmIY1KMZymwPyafyPGYmSjwDn3yHdo%2FeCmDdUVzR2JUxgdRaK3BR9nt4oy3Pg2vBc7a40wm%2FWOg6JOqDWaPWJX%2BAkGDqGcQqOTWMYlYIyqkyxFi9gxq1nlWNXCWuHTeg2oYPFoxOnDg3XMQYDMrSJR8mhlnP4oSISZ3DnRSKcs%2FFSrTPdF8A5YqLGcoEwY8M%2FVnDdddJ%2BvU1F0AuNgu%2FZMYJoV5pxn6IqdeGENN9461NK%2FbCaQrZgTRAdsNLlXQvBJKiDb8DwUnEsej7eI9lfgQXi%2F%2FbVPmLcUAHRoYhZw0uHG36ixUoJt29O3IRdXAobW%2FeYP6c4P0RkB2Xphhp07Sg3NFEkBDIqbsM0wxwabWUFIwGOYlDzHgkf4n5i01M2ejaJJzG13zT9VrR4NzVwzoVhtTa1L6E1ReL7GeSg2QyByU3yIzIp8O6%2FBeAeQaT%2BPkO6xYHIxmDFpN0ErlNfRqxnJq7fuB6FUQ2ulFurV9%2Baf%2Bklbanr%2Bc7MEeJZ68l5NY4FXUzovWdzVV1%2BRG5Bhz%2FUCCL1SfGRpRa74BHsRfPSS9O1BoiVa%2F2KxQk4OIAOu2OmSg2cKfkY8ikdZr0JsB3U3N4S6f3iussC0%2FZ8AaW5Ai1CCFMICDrcAGOqUBSj7vEQG7VMwKO5omiBG0fqYZiRiHYN4OiXW7Qb%2F1wEHX76tZJ3b2GOo3TSF%2FTWKrzD1YHRrMiy%2FklQF2KCkMEb4NDOjoibI2pn0iieh478lPnsHeJ3cz5XBtLNEVNoynuxs5VSoLvjVAEsSIjSAY32yltpLWP89Sm73V3i1bzgkaWbvsMdRuDl3bqPtYQDGS%2Fph5fA4RgBEfXr5D6me6IqGQt3Hy&X-Amz-Signature=25add49ca91e16dd810b06b84b60613e0f41b87498d31170cceadeb570b79c1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
