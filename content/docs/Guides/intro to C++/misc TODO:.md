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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGXFBFM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe8jRpbwCljxzybxw%2FDT7VExtibm47gVx%2F84ziJhiy6AiEAuEkoE98Oheu0RW6S7tiU62YGVU9cy5WSWUV%2FpRYsrHMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAfMyU1ptXKGP4OAtircA%2F8BJqFn9gqHd1HrF0mWlKWNhvSgDLJaGwKjHEGpdxqpjfSbxfeIJhUIcPENuzZMnJmhsql5t9Osc%2FOG3oaakzcUkS6OFKdM%2F7YksSNYDYPWVMkgDqclj4Z6yn%2B%2B9OHoLKWi%2Ft%2FTyOxztjXb9NjqHJBz9g0bhuSMrNAqEm%2BaP8kdFTLhZ%2BMwaF%2Fb2oPxOUTXnMNr%2FSrCaSWFl60lF4BKOnBQiBw3FfMlXhbLUZd1soM0T0Hzxcu1KvW4I0YYcjgYprPHAHrGcgSPvt1CcHexr5ejht7P%2BU3x%2FLB4tgsuf0R378UF9aPkxOEZF8Hv8QGnYO0csOFtDgbDFiGSZ3n%2F7g541Xvh6WoiX3lgpbngv60rczFbDftJiYCk9aIeYmEHk4%2Be2eErqXnPx9jBqJ3JaNa%2F73ciW6WvcJoLK3nZQ7ssjqV1bj1GVkhhVNVMVksuqAuHLySLPK8JknktbhC2LsNEnoFmqG5SajD0jHXqo5l%2B9uA442ZO3nlv0fiskJjcygRCmDuI1%2BneKKfzVK%2B5sdQcipnv54k3XW1RzGn6FLADv2pr%2BNq%2B9cxuJhzpZZNBVjwmtmbNUiltZ%2ByDxeiKnRz%2BPuaSwTDChuBuopcvwVIU17jt2GNeCdttyuZ1MJWxmr8GOqUBDFEoN7KD7rPmRn8YHtf6VubBa6UfGHdQN8oFPgzg30hNzzDwcMBgmmzk6Uyo8S4g5IYQcd37iuTDI9OQNFuQw0NnKHIHzaDGGKobcXqje5oq6FUp0I%2BGcknIkyH2AtjK58iXRsK4tjDNthaB8Q5Z63ZfkEeEe2P2qTk3sOZWs2KI6YwQEE%2BKktsW%2BU2MQNVfzwYqiEnmFCMUKjU52p0Yc06zHsOO&X-Amz-Signature=1109dc793a6f782ee607f191a730b16bc607d51836e4112728e88f0c32655d6c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAGXFBFM%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T131805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHe8jRpbwCljxzybxw%2FDT7VExtibm47gVx%2F84ziJhiy6AiEAuEkoE98Oheu0RW6S7tiU62YGVU9cy5WSWUV%2FpRYsrHMq%2FwMIXhAAGgw2Mzc0MjMxODM4MDUiDAfMyU1ptXKGP4OAtircA%2F8BJqFn9gqHd1HrF0mWlKWNhvSgDLJaGwKjHEGpdxqpjfSbxfeIJhUIcPENuzZMnJmhsql5t9Osc%2FOG3oaakzcUkS6OFKdM%2F7YksSNYDYPWVMkgDqclj4Z6yn%2B%2B9OHoLKWi%2Ft%2FTyOxztjXb9NjqHJBz9g0bhuSMrNAqEm%2BaP8kdFTLhZ%2BMwaF%2Fb2oPxOUTXnMNr%2FSrCaSWFl60lF4BKOnBQiBw3FfMlXhbLUZd1soM0T0Hzxcu1KvW4I0YYcjgYprPHAHrGcgSPvt1CcHexr5ejht7P%2BU3x%2FLB4tgsuf0R378UF9aPkxOEZF8Hv8QGnYO0csOFtDgbDFiGSZ3n%2F7g541Xvh6WoiX3lgpbngv60rczFbDftJiYCk9aIeYmEHk4%2Be2eErqXnPx9jBqJ3JaNa%2F73ciW6WvcJoLK3nZQ7ssjqV1bj1GVkhhVNVMVksuqAuHLySLPK8JknktbhC2LsNEnoFmqG5SajD0jHXqo5l%2B9uA442ZO3nlv0fiskJjcygRCmDuI1%2BneKKfzVK%2B5sdQcipnv54k3XW1RzGn6FLADv2pr%2BNq%2B9cxuJhzpZZNBVjwmtmbNUiltZ%2ByDxeiKnRz%2BPuaSwTDChuBuopcvwVIU17jt2GNeCdttyuZ1MJWxmr8GOqUBDFEoN7KD7rPmRn8YHtf6VubBa6UfGHdQN8oFPgzg30hNzzDwcMBgmmzk6Uyo8S4g5IYQcd37iuTDI9OQNFuQw0NnKHIHzaDGGKobcXqje5oq6FUp0I%2BGcknIkyH2AtjK58iXRsK4tjDNthaB8Q5Z63ZfkEeEe2P2qTk3sOZWs2KI6YwQEE%2BKktsW%2BU2MQNVfzwYqiEnmFCMUKjU52p0Yc06zHsOO&X-Amz-Signature=3ab984e1f0039a8ee657da47822ac2dd3058eb8227cbe72846eb6227147b2e6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
