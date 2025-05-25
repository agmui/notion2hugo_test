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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UKERJG4%2F20250525%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250525T181018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGgaCXVzLXdlc3QtMiJIMEYCIQClqNHevpJzs53vHG%2FQE4cn3u70Yc0K47DeH%2BX5mSFvDAIhAI12%2FJiywMMx0ohEcuinFIGGaSOwMBWYNY486LaPHhMvKv8DCDEQABoMNjM3NDIzMTgzODA1IgyjrsK54d3vIt9aARMq3ANprI%2FJ%2F0Fpv%2Bz4puxoqsFZRsOJZZASwX4YjZHfzeFhd%2FMfWmAHLy5yj1u7%2F6Mt6FsPYawqhKLeA%2F82OJ6pRVYfxyCsZ%2FyswtwUaZMkPL48ALgnZ%2B8fZjl7hokSSghieXBe96tdalajStHK1LnrK%2FrRR714WbHb3j%2BYYkkZnhu0a9WPbTEGz1HjVfwCvv9oRAJvW8hYJ27VhRnMWhRrD6TjQ3DfkanHJ18INrCUCN6rRAIyWRdAwACeky%2FWU4qxl34XN0ig6oVVJQBv%2FXbgPhN%2Bptc8tCpnUAbBwEWJT3oKNtmDvlsin9huXMDNSdujz7U5hZxnhgLs2bGygFHd4T1f4G8ijD3H6Pfu7R%2By86jIOXPOZbrem%2BJu9rSsHrDVj7py%2B9mFuRL6LylTzGhETsLA1XdiXrvhOouYtFB68D6%2Bzv4FcDP%2FfoLlCuP9zfGimiNrEsZifEM8TgPV1QtUiAJznmerX%2BYrwdi9iD8HFffF6sr2luuPhXpLfBIem58DXz8d19OcEVcGLjUsxuwKCjsGPb8ijdD0Gxpq8gBwFFk8k6XTRhhzYQbDyFLOFZ9VMs1G5r4M8y%2BWGDUS1%2BUD9TXeOiVc2fpV3apde98NJTVsozCn67nzwGhLathB5DCK%2F8zBBjqkAfrKgZsVk48YLVeCeqUIMH1BUtzgZALMh4MIgjfJqgaMEGMCaTExCDf5qN%2F8znFEu9hkJJxJNlllP3JWfrOYkzKMlOgjXgJu7me5bUESDCmT%2FizlrZSJa%2BwFCtf5NGs223wFc6ZL9I3VAnvv5CeEDp37vj%2Be%2FU8%2BRmW%2BnfnQPjY5E4hkayew8FXEEzAGeeeO7DvTHfgq9ONnQb8ZzW9dzF78PVgP&X-Amz-Signature=61a79440fea1743bb936f94b63772cee774f08b5f92d120c533032585dabc145&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
