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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKWDYWQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAiznSOvq7g2kDOBn0pMDN9zoSEhQgQ3UEr5njzHBtmAAiEA06FEIXaVJnw4EBvraJvmgf76MwOJHHYS8WxdCyWUcB4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEjeytalr07e6Mv1mSrcA06LO0vk6JJRYBrgA86HtHcn0s1QunzEILrChC757Wgl7NeiAuknPnSxzduY2%2B8LFaofVVROjGdMNwSPlrT0uX5Ptfg7uN5kt8z1yusbSGPEO8u9345SuwCzbNagjYPSf3g0E7JtvymC0%2BnE7%2B5tA%2FN6P3KzUYaLOFiCFvV%2BkZU5H7M%2FFyF024GSq6sm6jxjVlE1CfVTmmTIvnxAezC8MD95joSQQwG%2B%2Fiuoe4M1hVoaVOIps8y26mWOp2XA%2B%2FCNO0Yhwz4gMknBoCgjivQa4Bq7HdpDA8rRBwhXhRgLcs46Z4sQd2dfwF40xZHWBaI7%2FQyGa6GjDx%2F%2BuMtKF6%2F2Fm2YTRwXWohVtxrMrsLo7xXZBBeLep5VolJe3hwRKP6XSYHV854jxj8JJbmLY5eFJe8C6XrnxcCzANu8Lp0RiuAK62%2BO8P7DJqSzQVx2G4h7hbHADIDZYFwScbZsJqBQXMgDole%2BprqAuReMXUZoNYhw4k1DurtHzEdUMz2KNyt78zKNv4n8zhaMgkBvfhyC6x%2BqE9xm1rMUGS9yr63tbpYb%2FrVOimJcrLnIAykyzLFZkHPIND6SifYVNlH0JYHUpLinxQWuSgzWYk2ojo5LxakXCd9%2BGUe0AK2Nf0whMPyy%2BcQGOqUB2KGJ083S4zI91IOQ6a5aw08mVuWq3U9p8ERRXrQgi%2FB90gc8lawOJU7rdtfr1MSQ%2BY5jhOBCYnqenis1mtwXGQqYalZkRueSnNiiC02CFPdvcCZDVuaQmGkwPmOR6u7Pav1%2FaG1gN1oE5lpRrqJfL3dnBXp1Vjp4yzYZFFIKFU4MhhrYY%2F7MBBH74sD5RSo0n4gOmq%2BVaa80r6l7iXhmYF6NreaF&X-Amz-Signature=522edec7f308002355397719a08b68b400a757b0a8e39527d4c3c1a85f1268e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEKWDYWQ%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T220833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJHMEUCIAiznSOvq7g2kDOBn0pMDN9zoSEhQgQ3UEr5njzHBtmAAiEA06FEIXaVJnw4EBvraJvmgf76MwOJHHYS8WxdCyWUcB4q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDEjeytalr07e6Mv1mSrcA06LO0vk6JJRYBrgA86HtHcn0s1QunzEILrChC757Wgl7NeiAuknPnSxzduY2%2B8LFaofVVROjGdMNwSPlrT0uX5Ptfg7uN5kt8z1yusbSGPEO8u9345SuwCzbNagjYPSf3g0E7JtvymC0%2BnE7%2B5tA%2FN6P3KzUYaLOFiCFvV%2BkZU5H7M%2FFyF024GSq6sm6jxjVlE1CfVTmmTIvnxAezC8MD95joSQQwG%2B%2Fiuoe4M1hVoaVOIps8y26mWOp2XA%2B%2FCNO0Yhwz4gMknBoCgjivQa4Bq7HdpDA8rRBwhXhRgLcs46Z4sQd2dfwF40xZHWBaI7%2FQyGa6GjDx%2F%2BuMtKF6%2F2Fm2YTRwXWohVtxrMrsLo7xXZBBeLep5VolJe3hwRKP6XSYHV854jxj8JJbmLY5eFJe8C6XrnxcCzANu8Lp0RiuAK62%2BO8P7DJqSzQVx2G4h7hbHADIDZYFwScbZsJqBQXMgDole%2BprqAuReMXUZoNYhw4k1DurtHzEdUMz2KNyt78zKNv4n8zhaMgkBvfhyC6x%2BqE9xm1rMUGS9yr63tbpYb%2FrVOimJcrLnIAykyzLFZkHPIND6SifYVNlH0JYHUpLinxQWuSgzWYk2ojo5LxakXCd9%2BGUe0AK2Nf0whMPyy%2BcQGOqUB2KGJ083S4zI91IOQ6a5aw08mVuWq3U9p8ERRXrQgi%2FB90gc8lawOJU7rdtfr1MSQ%2BY5jhOBCYnqenis1mtwXGQqYalZkRueSnNiiC02CFPdvcCZDVuaQmGkwPmOR6u7Pav1%2FaG1gN1oE5lpRrqJfL3dnBXp1Vjp4yzYZFFIKFU4MhhrYY%2F7MBBH74sD5RSo0n4gOmq%2BVaa80r6l7iXhmYF6NreaF&X-Amz-Signature=946055186a8f1872af73d2f6e951aea6d0cd05a47c6b565cdc80900dae275985&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
