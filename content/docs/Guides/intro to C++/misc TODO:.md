---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NB3LWZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDEQYPHMreC%2Fwtzdm8RI1Ifux5QKh0pJAhbpuwDkG3BgQIhAPYb%2BjgPdS0QhC83yn4AfUSqQ9HQHsc8T%2BhPbdlMvFZ0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNKIphkUoVOVj3WdEq3AOI%2BFeUqB3Z6BevPBPJE4yiERklmiBp3CY93ZC%2BNTg1eDHbSsyu20axlCIGswDYgt%2FoikA8GVGvp7kJGoF1z0DREPdsR33H%2B0CFUoN4wzTA6dgPhmerAohOwhRabEXvs%2B%2Ff1YNLrMhdmNG0EOHramYZez7EtW4L%2B0rlm%2FayElAJK9eYh9jCNa7BKwU3yj7PC8YS9TEtGV%2BjNNez41eF6W%2FuQBacoXNp0wZhkeBqDJaOCv%2BbaEZFepD63uDTFgS6mMBuRDl33TnI8547okMTVL2xMliJAK%2BMdUMrGs1RtreNLuvg1HhjSlM3Z2CA%2FcpKyEsMbJCk62hVBiHZAb7D5D4ZZpEQTHnWGwbfudI4y7vZw48TTJLG3mXIJEY95XLkK5QSq52AsLLB6F8n5HTMw1oiPzUMEY%2BsYp3Rngng8NSj4gPJ1v4QJRB50T4dRCbploz%2F7caSdDDYXkdpw74xrdW2PLV6tlwhUMOPe6cKe%2BNXNmuT0A4y82ziOOIeZTbZsmNrq%2FOEFlGPjooTDPVktD9KmkKPqu2Z2w258tZi%2FXUZLcV6DvFhHfY%2Fxq9BUzo9Ga8tPGoHgSjyibmwIRtI6KNUy8gPfkqdjN5cCy3gjAQnRzPXuzlDRLv5pNh5JTCB4sjABjqkAdASpfoaERIdHTzk9%2Fuzub9xw7hgRrVuTXMqGMwVqrh02WoSO7aOZbDtxVgqd5CmL2eUjV1zWDCq7Gm0eL6EgfrfSBIKEfQSyXuzV%2F4pGWeH06FDT7ZSdky7H1r5B9SxLjjkkDyN%2FFxU9pji4lP2HnfmX6S36cSGbn5n54485xcADwKxHnpBgi5iJuNuy3xQO3eUcGtcNM1q%2FI98C0ADXBbx0a3C&X-Amz-Signature=00af9d315844d2687de27c6f3f1b9e7be4c06eea242172dc4a3333dd1c683052&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634NB3LWZ%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T150912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA4aCXVzLXdlc3QtMiJIMEYCIQDEQYPHMreC%2Fwtzdm8RI1Ifux5QKh0pJAhbpuwDkG3BgQIhAPYb%2BjgPdS0QhC83yn4AfUSqQ9HQHsc8T%2BhPbdlMvFZ0KogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNKIphkUoVOVj3WdEq3AOI%2BFeUqB3Z6BevPBPJE4yiERklmiBp3CY93ZC%2BNTg1eDHbSsyu20axlCIGswDYgt%2FoikA8GVGvp7kJGoF1z0DREPdsR33H%2B0CFUoN4wzTA6dgPhmerAohOwhRabEXvs%2B%2Ff1YNLrMhdmNG0EOHramYZez7EtW4L%2B0rlm%2FayElAJK9eYh9jCNa7BKwU3yj7PC8YS9TEtGV%2BjNNez41eF6W%2FuQBacoXNp0wZhkeBqDJaOCv%2BbaEZFepD63uDTFgS6mMBuRDl33TnI8547okMTVL2xMliJAK%2BMdUMrGs1RtreNLuvg1HhjSlM3Z2CA%2FcpKyEsMbJCk62hVBiHZAb7D5D4ZZpEQTHnWGwbfudI4y7vZw48TTJLG3mXIJEY95XLkK5QSq52AsLLB6F8n5HTMw1oiPzUMEY%2BsYp3Rngng8NSj4gPJ1v4QJRB50T4dRCbploz%2F7caSdDDYXkdpw74xrdW2PLV6tlwhUMOPe6cKe%2BNXNmuT0A4y82ziOOIeZTbZsmNrq%2FOEFlGPjooTDPVktD9KmkKPqu2Z2w258tZi%2FXUZLcV6DvFhHfY%2Fxq9BUzo9Ga8tPGoHgSjyibmwIRtI6KNUy8gPfkqdjN5cCy3gjAQnRzPXuzlDRLv5pNh5JTCB4sjABjqkAdASpfoaERIdHTzk9%2Fuzub9xw7hgRrVuTXMqGMwVqrh02WoSO7aOZbDtxVgqd5CmL2eUjV1zWDCq7Gm0eL6EgfrfSBIKEfQSyXuzV%2F4pGWeH06FDT7ZSdky7H1r5B9SxLjjkkDyN%2FFxU9pji4lP2HnfmX6S36cSGbn5n54485xcADwKxHnpBgi5iJuNuy3xQO3eUcGtcNM1q%2FI98C0ADXBbx0a3C&X-Amz-Signature=037e4173e59b5dfe8f9b21350356011c6e6e556c8df58318265aaa7ec632f5d4&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
