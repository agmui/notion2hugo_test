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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634S55M2T%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCz%2FEyPUK8sHjlbob%2B6fif%2B3m%2BCpVoRjD8q1CAt8ymTBwIhAP9weBaXgHZ6MjgIQSvuHd5R0iAASOlkT5Sny9xuN5E1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzUBRapBY9D%2FtzFrK4q3ANSq3qGRImrta2GcebxxCNsQc6qArblhyRMx3yFKYCyTUT%2BtCACtoumkh9500awRGnh8siMKmqcaAzE9mnemRKFwH6WDGx5mqOAVzhhRn%2FiNUNtKaZkduBgWbxaXcj4HBiG0eWeqnT5oFJS5y9uAhPezgiGH08diWZLd88%2Fj5S5%2BC49VQwvfHwCH4gXeWkp6K5L3v0rhjGXo86L0xH09epbG01Et6jHANn7JXL1Mx7q78xjKw4gwTmkTSYfpk4QI%2FvN52ztmpWY6uN1x6YZGRu7Qz8ChdWrj35IzWKtjVVErYJI%2F3PSnC5eiCsV%2BSJqNB1GfdxArf0fVRS0%2FSsoy5gcqxrLdLkqNqSZGaNo1I1%2FYUPHOUMFt1%2B%2FOfM5c0099GnfaA4MmBOH5Kay2OC0KQ76zwkXoGt2AyUIaglXlIUkvD1rdg1tpxL71Sxbx6bXxVFzpJxxtlbP3vXehhX358i%2FHVgC7f%2FD3VydweT2SKwhGL1wc38dKDuomZJkcx3kHIdb%2Ft45PLAAtL2rICZTCh%2B7c50%2BQWkSe0%2B0XYTYn2Og%2F73J2Jk7QTvQIiqLXauptvwI4hVpjFo5dzaif37OpJd3m%2FGB8onSdk8iRdIdB2SgB5ZvkS0Gl1G3f469qjCTv4m9BjqkAWl6cr9OWT640EpDEdzOvS5IGFJucPCsmd4eHg9KhilFZDwCz9TKL%2B5mQouW8Dj64FZEBsN%2BUZGQt18uxT8EU8zI%2FnbttjcTqzw1Vpub%2FFZlFScyrctqqtNNgLaunM2f6wAv0zsQje%2FWw2RDOr7oHs8zSQAhbqA1R7ckKnowcDZVJndllHwFNKhq%2BOlOjQQYRFDJE3aOEp2gYf%2F%2BR0IRwfqHVbu%2F&X-Amz-Signature=f668c89a9cca7594b8c7d1bd6cd2929af7242e15bc4ae583b579be53c3a90f35&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634S55M2T%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T190109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCz%2FEyPUK8sHjlbob%2B6fif%2B3m%2BCpVoRjD8q1CAt8ymTBwIhAP9weBaXgHZ6MjgIQSvuHd5R0iAASOlkT5Sny9xuN5E1Kv8DCDQQABoMNjM3NDIzMTgzODA1IgzUBRapBY9D%2FtzFrK4q3ANSq3qGRImrta2GcebxxCNsQc6qArblhyRMx3yFKYCyTUT%2BtCACtoumkh9500awRGnh8siMKmqcaAzE9mnemRKFwH6WDGx5mqOAVzhhRn%2FiNUNtKaZkduBgWbxaXcj4HBiG0eWeqnT5oFJS5y9uAhPezgiGH08diWZLd88%2Fj5S5%2BC49VQwvfHwCH4gXeWkp6K5L3v0rhjGXo86L0xH09epbG01Et6jHANn7JXL1Mx7q78xjKw4gwTmkTSYfpk4QI%2FvN52ztmpWY6uN1x6YZGRu7Qz8ChdWrj35IzWKtjVVErYJI%2F3PSnC5eiCsV%2BSJqNB1GfdxArf0fVRS0%2FSsoy5gcqxrLdLkqNqSZGaNo1I1%2FYUPHOUMFt1%2B%2FOfM5c0099GnfaA4MmBOH5Kay2OC0KQ76zwkXoGt2AyUIaglXlIUkvD1rdg1tpxL71Sxbx6bXxVFzpJxxtlbP3vXehhX358i%2FHVgC7f%2FD3VydweT2SKwhGL1wc38dKDuomZJkcx3kHIdb%2Ft45PLAAtL2rICZTCh%2B7c50%2BQWkSe0%2B0XYTYn2Og%2F73J2Jk7QTvQIiqLXauptvwI4hVpjFo5dzaif37OpJd3m%2FGB8onSdk8iRdIdB2SgB5ZvkS0Gl1G3f469qjCTv4m9BjqkAWl6cr9OWT640EpDEdzOvS5IGFJucPCsmd4eHg9KhilFZDwCz9TKL%2B5mQouW8Dj64FZEBsN%2BUZGQt18uxT8EU8zI%2FnbttjcTqzw1Vpub%2FFZlFScyrctqqtNNgLaunM2f6wAv0zsQje%2FWw2RDOr7oHs8zSQAhbqA1R7ckKnowcDZVJndllHwFNKhq%2BOlOjQQYRFDJE3aOEp2gYf%2F%2BR0IRwfqHVbu%2F&X-Amz-Signature=cc06cee419dd6a587327238433d333f2a66b296b48fcba5502e4c166eadaa882&X-Amz-SignedHeaders=host&x-id=GetObject)

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
